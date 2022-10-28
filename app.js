const express = require("express");

const bodyParser = require("body-parser");

const app = express();

let result = "";

let result2 = "";

let result3 = "";

let result4 = "";

let result5 = "";

let result6 = "";

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/",function(req, res){
res.render("list", {AreaTri: result, AreaCir: result2, cylinder: result3, sphere: result4, cone: result5, hemiSphere: result6});
});

app.post("/", function(req,res){

  if(req.body.button === "tri"){

    let height = Number(req.body.h);

    let base = Number(req.body.b);

     result = (height * base)/2;

    res.redirect("/");

  }else if(req.body.button === "cir"){

    let radius = Number(req.body.radius);

    result2 = 3.14159 * (radius * radius);

    res.redirect("/");

  }else if(req.body.button === "cyl"){

    let rad = Number(req.body.rcy);

    let ht = Number(req.body.hcy);

    result3 = 3.14159 * (rad * rad) * ht;

    res.redirect("/");

  }else if(req.body.button === "sph"){

    let raSph = Number(req.body.rSp);

    result4 = (4/3) * 3.14159 * (raSph * raSph * raSph);

    res.redirect("/");
  }else if(req.body.button === "cone"){
    let rCone = Number(req.body.rCone);
    let hCone = Number(req.body.hCone);
    result5 = (3.14159 * rCone * rCone * hCone)/3;

    res.redirect("/");
  }else {
    let rHemi = req.body.hemiS;

    result6 = (2/3) * 3.14159 * rHemi * rHemi * rHemi;

    res.redirect("/");
  }

});

app.listen(process.env.PORT || g3000, function(){
  console.log("server is running on port 3000");
})
