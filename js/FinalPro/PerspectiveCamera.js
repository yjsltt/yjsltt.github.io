/* 
 * @requires Vector3
 */
//透视摄像机
PerspectiveCamera = function(eye, front, up, fov ,ratio) { this.eye = eye; this.front = front; this.refUp = up; this.fov = fov; this.ratio=ratio};

PerspectiveCamera.prototype = {
    initialize : function() {
        this.right = this.front.cross(this.refUp);
        this.up = this.right.cross(this.front);
        this.fovScale = Math.tan(this.fov * 0.5 * Math.PI / 180) * 2;
        //返回的是弧度值
        this.fov2=2*Math.atan(this.ratio*this.fovScale/2);
        this.fovScale2=Math.tan(this.fov2 * 0.5 ) * 2;
    },

    generateRay : function(x, y) {
        var r = this.right.multiply((x) * this.fovScale2);
        var u = this.up.multiply((y - 0.5) * this.fovScale);
        return new Ray3(this.eye, this.front.add(r).add(u).normalize());
    }
};
