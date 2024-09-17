AFRAME.registerComponent('move',{
    schema:{
        moveY:{type:'number', default: 0}
    },

    init: function(){
        console.log("rocket launch")
    },

    tick: function(){
        window.addEventListener('click',(e)=>{
            this.data.moveY=this.data.moveY+1
        })
        var pos=this.el.getAttribute("position")
        pos.y=this.data.moveY
        this.el.setAttribute('position',{x:pos.x, y:pos.y, z:pos.z})
    }
})