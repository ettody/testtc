export class Point{
    x: number;
    y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    add(point : Point){
        return new Point(this.x + point.x, this.y + point.y)
    }
}

export class Point3D extends Point{ //Turunan dari Class Point
    z: number;
    constructor(x: number, y: number, z:number){
         super(x,y);
        this.z = z;
    }
    add(point : Point3D){
        var point2D = super.add(point);
        return new Point3D(point2D.x, point2D.y, this.z + point.z);
    }
    hitungvolume(){
        return this.x * this.y * this.z;
    }
}