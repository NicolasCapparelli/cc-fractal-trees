let sketch = function (context) {

    context.branchingAngle = context.PI / 4;
    context.startingBranchLength = 100;

    context.setup = function () {
        context.createCanvas(600, 600);
    }

    context.draw = function () {
        context.background(51);

        context.stroke(255);

        // Translate the origin point of the canvas to ...
        context.translate(context.width / 2, context.height);
        drawBranch(context, context.startingBranchLength);
    }
}

function drawBranch(ctx, branchHeight) {
    ctx.line(0, 0, 0, -branchHeight);
    ctx.push();
    ctx.translate(0, -branchHeight);
    ctx.rotate(ctx.branchingAngle);
    if (branchHeight > 4) {
        drawBranch(ctx, branchHeight * 0.67);
    }
    ctx.pop();
    ctx.rotate(-ctx.branchingAngle);
    if (branchHeight > 4) {
        drawBranch(ctx, branchHeight * 0.67);
    }

}

let branchingAngleSlider = document.getElementById("branching-angle-slider");
branchingAngleSlider.setAttribute("min", (0).toString());
branchingAngleSlider.setAttribute("max", (p5.PI / 2).toString());
branchingAngleSlider.setAttribute("step", "0.01");
branchingAngleSlider.oninput = function (newValue) {
    fractalTreeSketch.branchingAngle = branchingAngleSlider.value;
}


let startingBranchLengthSlider = document.getElementById("starting-branch-length-slider");
let sketchContainer = document.getElementById("sketch-name");
let fractalTreeSketch = new p5(sketch, sketchContainer);