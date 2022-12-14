import {move_in_3d} from "./utils.js";
import {update_module_centers} from "./draw_modules.js";

class Animation {   
    constructor(positions, images, duration) {
        this.positions = positions;
        this.images = images;
        this.root_modules = [25];
        this.duration = 500;
        
        // initialized on each call of animate()
        this.promise = null
        this.resolve = null;
        this.roots = null;
        this.scalar = null;
        this.reverse = false;
        this.ends = [];
        this.moves = null;
        
        // pushed to on each call of animate()
        this.queue = [];
        this.history_queue = [];
        this.promises = [];
    }
    
    get_leaves(positions, mod_id, ends = []) {
        if (positions[mod_id].children.length == 0)
            ends.push(mod_id);
        else {
            positions[mod_id].children.forEach(ch => {
                ends = this.get_leaves(positions, ch, ends);
            });
        }
        return ends;
    }
    
    move(mv, step_done, is_last_in_step, is_last) {
        var x_old = +this.images[mv.id].select("image").attr("x"),
            y_old = +this.images[mv.id].select("image").attr("y"),
            [x, y] = move_in_3d(x_old, y_old, mv.v);

        this.images[mv.id].select("image")
            .datum([this, step_done, is_last])
            .transition()
            .duration(this.duration)
            .ease(d3.easeExp)
            .attr("x", x)
            .attr("y", y)
            .on("end", function(args) {
                // resolve the step promise
                args[1](args[0]);
            
                // resolve animation on last move
                if (args[2])
                    args[0].resolve(args[0]) 
            });
    }
    
    apply_moves(i=0) {
        var step_done;
        var promise_step = new Promise(resolve => {
            step_done = resolve;
        });
        
        this.moves[i].forEach((mv, j) => {
            if (j == this.moves[i].length - 1) {
                var is_last_in_step = true;
                if (i == this.moves.length - 1)
                    var is_last = true;
                else
                    var is_last = false;
            } else {
                var is_last_in_step = false;
            }
            
            this.move(mv, step_done, is_last_in_step, is_last);
        });
        
        promise_step.then(function(context) {
            console.log("step done", i);
            if (context.moves.length > ++i)
                context.apply_moves(i);
        });
    }
    
    construct_moves() {
        function get_all_children(positions, id, res) {
            positions[id].children.forEach(ch => {
                res.add(ch);
                res = get_all_children(positions, ch, res);
            });
            return res;
        }
        
        function construct(positions, ids, scalar, reverse=false, moves=[]) {
            if (reverse == false)
                var mult = 1;
            else
                var mult = -1;
            
            for (var i = 0, done = false; !done; ++i) {
                done = true;
                var moves_one_step = [];
                ids.forEach(id => {
                    // if the current move is not the last, there is something more to do
                    if (i < positions[id].moves.length - 1)
                        done = false;
                    
                    var mv = positions[id].moves[i];
                    if (mv != null) {
                        if (mv.direction == "-x") {
                            var v = [-mv.d*scalar*mult, 0, 0];
                        } else if (mv.direction == "+x") {
                            var v = [mv.d*scalar*mult, 0, 0];
                        } else if (mv.direction == "-y") {
                            var v = [0, -mv.d*scalar*mult, 0];
                        } else if (mv.direction == "+y") {
                            var v = [0, mv.d*scalar*mult, 0];
                        } else if (mv.direction == "-z") {
                            var v = [0, 0, -mv.d*scalar*mult];
                        } else if (mv.direction == "+z") {
                            var v = [0, 0, mv.d*scalar*mult];
                        }

                        var mods = get_all_children(positions, id, new Set());
                        if (reverse == false)
                            moves_one_step.push({id:id, v:v, root:true});
                        mods.forEach(m => {
                            // append moves of the children
                            moves_one_step.push({id:m, v:v, root:false});  
                        })
                        if (reverse == true)
                            moves_one_step.push({id:id, v:v, root:true});
                    }
                });
                moves.push(moves_one_step);
            }
            
            var c = [];
            ids.forEach(id => {
                c = c.concat(positions[id].children);
            });
            
            if (c.length != 0)
                moves = construct(positions, c, scalar, reverse, moves);
            
            return moves;
        }

        if (this.reverse == true)
            return construct(this.positions, this.ends, this.scalar, this.reverse).reverse();
        else
            return construct(this.positions, this.roots, this.scalar, this.reverse);
    }
    
    animate_ready() {
        var q_data = this.queue.shift();
        this.reverse = q_data.reverse;
        
        if (this.reverse == true) {
            var h_data = this.history_queue.shift();
            
            // init parameters
            this.promise = q_data.promise;
            this.resolve = q_data.resolver;
            this.roots = h_data.ends;
            this.scalar = h_data.scalar;
            
            // init ends as roots
            this.ends = h_data.roots;
        } else {
            // init parameters
            this.promise = q_data.promise;
            this.resolve = q_data.resolver;
            this.roots = q_data.mod_ids;
            this.scalar = q_data.scalar;
            
            // init ends as leaves (with no children)
            this.roots.forEach(mid => { this.ends = this.ends.concat(this.get_leaves(this.positions, mid)); });
            
            // push to history_queue
            this.history_queue.push({
                id: q_data.id,
                roots: q_data.mod_ids,
                ends: this.ends,
                scalar: q_data.scalar
            });
        }
        
        // construct moves
        this.moves = this.construct_moves();
        
        // apply moves
        this.apply_moves();
    }
    
    animate_helper(mod_ids, scalar, reverse) {
        this.roots = mod_ids;
        
        // create the animation promise and a function to resolve it
        var done;
        var animate_promise = new Promise(resolve => {
            done = resolve;
        });
        
        // get all other promises
        var other_promises = Promise.all(this.promises);
        
        // add animation to the queue
        this.promises.push(animate_promise);
        this.queue.push({
            id: this.history_queue.length,
            resolver: done,
            mod_ids: mod_ids,
            scalar: scalar,
            reverse: reverse
        });
        
        // if no animations in queue
        if (this.promises.length == 1) {
            console.log("Started animation");

            // animate
            this.animate_ready();
        }
        // otherwise
        else {
            // wait for previous animations
            other_promises.then(function(context) {
                // animate
                console.log("Started animation"); 
                context[0].animate_ready(); 
            });
        }
        
        // wait for animation to finish
        animate_promise.then(function(context) {
            context.ends = [];
            console.log("finished animation");
            update_module_centers();
        });
    }
    
    animate_reverse() {
        this.animate_helper(null, null, true);
    }
    
    animate(mod_ids, scalar) {
        this.animate_helper(mod_ids, scalar, false);
    } 
    
    animate_all(scalar) {
        this.animate_helper(this.root_modules, scalar, false);
    }
    
    finished() {
        return Promise.all(this.promises);
    }
}

export {Animation};