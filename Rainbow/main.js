// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that wil contain the game
var main_state = {
//asd
    preload: function() { 

    this.game.stage.backgroundColor = '#71c5cf';


    this.game.load.image('bird', 'assets/bird.png'); 
    },

    create: function() { 
    // покажем птичку на экране
    this.bird = this.game.add.sprite(100, 245, 'bird');

    // добавим гравитацию, заставив птичку падать вниз
    this.bird.body.gravity.y = 1000;  

    // добавим функцию jump в качестве обработчика нажатия пробела
    var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    space_key.onDown.add(this.jump, this); 
    },
    
    update: function() {

		    if (this.bird.inWorld == false)
        this.restart_game();
    },
	// поможем птичке подпрыгнуть
jump: function() {  
    // добавляем вертикальную скорость птице
    this.bird.body.velocity.y = -350;
},

// начинаем игру заново
restart_game: function() {  
    // запускаем состояние "main", которое перезапускает игру
    this.game.state.start('main');
},
};

// Add and start the 'main' state to start the game
game.state.add('main', main_state);  
game.state.start('main'); 