namespace SpriteKind {
    export const Object = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    pause(500)
    Useless_Frickin_Bird.sayText("i am very sad", 1000, false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Useless_Frickin_Bird.vy = -100
    Useless_Frickin_Bird.sayText("i am ascending now")
})
let Useless_Frickin_Bird: Sprite = null
scene.setBackgroundColor(0)
Useless_Frickin_Bird = sprites.create(assets.image`SadBird`, SpriteKind.Player)
controller.moveSprite(Useless_Frickin_Bird)
let Dead_lol = sprites.create(assets.image`myImage`, SpriteKind.Object)
Dead_lol.setPosition(74, 84)
forever(function () {
    music.playMelody("B C5 B C5 B C5 B C5 ", 120)
})
