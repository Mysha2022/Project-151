AFRAME.registerComponent('move-box',{
    schema:{
        moveX:{type:'number', default: 0}
    },

    init: function(){
        console.log("welcome to coding")
    },

    tick: function(){
        window.addEventListener('click',(e)=>{
            this.data.moveX=this.data.moveX+1
        })
        var pos=this.el.getAttribute("position")
        pos.x=this.data.moveX
        this.el.setAttribute('position',{x:pos.x, y:pos.y, z:pos.z})
    }
})