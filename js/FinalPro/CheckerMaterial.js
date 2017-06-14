/* 
 * @requires Vector3
 * @requires Color
 */

CheckerMaterial = function(scale, reflectiveness,diffuseness) { this.scale = scale; this.reflectiveness = reflectiveness; this.diffuseness=diffuseness};

CheckerMaterial.prototype = {
    sample : function(ray, position, normal) {
        // this.scale=this.acce*this.scale;
        return Math.abs((Math.floor(position.x * this.scale) + Math.floor(position.z * this.scale)) % 2) < 1 ? Color.black : Color.white;
    }
};