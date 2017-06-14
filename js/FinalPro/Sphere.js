/* 
 * @requires Vector3, Ray3
 */

Sphere = function(center, radius) { this.center = center; this.radius = radius; };

Sphere.prototype = {
    copy : function() { return new Sphere(this.center.copy(), this.radius.copy()); },

    initialize : function() {
        this.sqrRadius = this.radius * this.radius;
    },

    intersect : function(ray) {
        var v = ray.origin.subtract(this.center);
        var a0 = v.sqrLength() - this.sqrRadius;
        var DdotV = ray.direction.dot(v);

        if (DdotV <= 0) {
            //判别式
            var discr = DdotV * DdotV - a0;
            //判别式大于0表示有根
            if (discr >= 0) {
                //用result来表示Ray与几何体的相交结果
                var result = new IntersectResult();
                result.geometry = this;
                //计算t
                result.distance = -DdotV - Math.sqrt(discr);
                //计算相交是的交点
                result.position = ray.getPoint(result.distance);
                //计算交点的法向量，为交点与球心形成的法向量
                result.normal = result.position.subtract(this.center).normalize();
                return result;
            }
        }

        return IntersectResult.noHit;
    }
};
