/* 
 * @requires Vector3
 * @requires Color
 */
/**
 * @param diffuse 反射光
 * @param specular 漫反射光
 * @param shininess 光强度
 * @param reflectiveness 反射强度
 * @constructor
 */
PhongMaterial = function(diffuse, specular, shininess, reflectiveness) {
    this.diffuse = diffuse;
    this.specular = specular;
    this.shininess = shininess;
    this.reflectiveness = reflectiveness;
};

// global temp
var lightDir = new Vector3(1, 1, 1).normalize();
var lightColor = Color.white;

PhongMaterial.prototype = {
    sample: function(ray, position, normal) {
        var NdotL = normal.dot(lightDir);
        var H = (lightDir.subtract(ray.direction)).normalize();
        var NdotH = normal.dot(H);
        var diffuseTerm = this.diffuse.multiply(Math.max(NdotL, 0));
        var specularTerm = this.specular.multiply(Math.pow(Math.max(NdotH, 0), this.shininess));
        return lightColor.modulate(diffuseTerm.add(specularTerm));
    }
};
