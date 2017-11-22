var recorde = 0; //esse recorde é utilizado para controlar o desbloqueio dos personagens, sera subistituido depois pelo recorde pessoal do jogador
var vida = 3;
var pontosDuranteJogo = 0;
var tempo;
var tempoM;
var qual_personagem = 1;
var morte = 0;
var dormiu = 0; // 

function createCenario(qual_personagem) {	
	
personagem(qual_personagem);
	
	var geometry ;
	var material ;
	
	
	var deslocamentoLinha = 0;
	var fundo;
	var LinhaAtualJogador;
	var pulando = false;
	var descendo = false;
	var altura=0;
	
	var layerXlinha = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
	var quantidadeCamadas = 20;
	var i = 0;
	var j = 0;

	var posicaoZ;
	
	var auxVelocidade = 0;
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var geometry = new THREE.BoxGeometry( 1.7, 0.1, 3.2 ); //(x,y,z) de formato
	
	var material;

	var auxAngulo;
	
	//variaveis de controle
	var randomicoON = true;
	var cenarioAtual = "16lados";
	var trocando = false;
	var proximoCenario = "";
	var contadorVolta = 18;//um contador para fazer ele dar 1 volta antes de mudar o cenario
	
	var KeyDireita = false;
	var KeyEsquerda = false;
	var KeyCima = false;
	
	
	var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
	
	window.addEventListener("keydown", keydownHandler, false);
	window.addEventListener("keyup", keyupHandler, false);
	
	
	
	function keydownHandler(e){ //quando o botao eh pressioando
	switch(e.keyCode){
		case RIGHT:
			KeyDireita = true;
		break;
		case LEFT:
			KeyEsquerda = true;
		break;
		case UP:
		if(pulando == false && descendo == false && perdendo == false)
		pulando = true;
		break;
		case DOWN:
		alert("JOGO PAUSADO");
		KeyDireita = false;
		KeyEsquerda = false;
		break;

	}
	if(LinhaAtualJogador >15) LinhaAtualJogador = 0;
	if(LinhaAtualJogador < 0) LinhaAtualJogador = 15;
}



function keyupHandler(e){ //quando os botoes sao soltos
	switch(e.keyCode){
		case RIGHT:
				KeyDireita = false;
			break;
		case LEFT:
				KeyEsquerda = false;
			break;
		case UP:
			
			break;
		case DOWN:
			
			break;
	}
}
	
	/////////////////////////////////////////////
	// as funcoes abaixo criam o inicio do cenario,
	// transformando todas as peças no formato
	// desejado: 16lados, 8lados, 4planos, plano
	/////////////////////////////////////////////
	
	function Cenario16lados(){
		descendo = false;
		altura = 0;
		scene.rotation.z = 0;
		camera.position.x = 0;
		deslocamentoLinha = 0;
		LinhaAtualJogador = 8;
		camera.position.y = -3;
		posicaoZ = 24;
		for(j = 0; j < quantidadeCamadas;j++){
			material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			for(i = 0; i < 16;i++){
				layerXlinha[j][i] = new THREE.Mesh( geometry, material );
				
				layerXlinha[j][i].material.transparent = true;
				
				layerXlinha[j][i].position.z = posicaoZ;
				
				auxAngulo = 2.75 * (i);
				layerXlinha[j][i].rotation.z = auxAngulo;
				
				if(i==0){
					layerXlinha[j][i].position.x = 0;
					layerXlinha[j][i].position.y = 3.9;
				}
				if(i==1){
					layerXlinha[j][i].position.x = 1.5238;
					layerXlinha[j][i].position.y = 3.6191;
				}
				if(i==2){
					layerXlinha[j][i].position.x = 2.7809;
					layerXlinha[j][i].position.y = 2.8191;
				}
				if(i==3){
					layerXlinha[j][i].position.x = 3.619;
					layerXlinha[j][i].position.y = 1.5238;
				}
				if(i==4){
					layerXlinha[j][i].position.x = 3.9;
					layerXlinha[j][i].position.y = 0;
				}
				if(i==5){
					layerXlinha[j][i].position.x = 3.619;
					layerXlinha[j][i].position.y = -1.5238;
				}
				if(i==6){
					layerXlinha[j][i].position.x = 2.7809;
					layerXlinha[j][i].position.y = -2.7809;
				}
				if(i==7){
					layerXlinha[j][i].position.x = 1.5238;
					layerXlinha[j][i].position.y = -3.619;
				}
				if(i==8){
					layerXlinha[j][i].position.x = 0;
					layerXlinha[j][i].position.y = -3.9; //arredondado para melhorar
				}
				if(i==9){
					layerXlinha[j][i].position.x = -1.5238;///
					layerXlinha[j][i].position.y = -3.619;
				}
				if(i==10){
					layerXlinha[j][i].position.x = -2.871;
					layerXlinha[j][i].position.y = -2.7809;
				}
				if(i==11){
					layerXlinha[j][i].position.x = -3.6573;
					layerXlinha[j][i].position.y = -1.5238;
				}
				if(i==12){
					layerXlinha[j][i].position.x = -3.93;
					layerXlinha[j][i].position.y = 0;
				}
				if(i==13){
					layerXlinha[j][i].position.x = -3.6572;
					layerXlinha[j][i].position.y = 1.5619;
				}
				if(i==14){
					layerXlinha[j][i].position.x = -2.8191;
					layerXlinha[j][i].position.y = 2.8191;
				}
				if(i==15){
					layerXlinha[j][i].position.x = -1.562;
					layerXlinha[j][i].position.y = 3.6191;
				}
				
				layerXlinha[j][i].visible=true;
				scene.add( layerXlinha[j][i]);
			}
		
			posicaoZ+=-3;
			auxAngulo = -1;
		}
	}
	function Cenario8lados(){
		//cenarioAtual = "8lados";
		descendo = false;
		altura = 0;
		scene.rotation.z = 0;
		deslocamentoLinha = 0;
		LinhaAtualJogador = 7;
		camera.position.x=0.85;
		camera.position.y = -3;
		posicaoZ = 24;
		for(j = 0; j < quantidadeCamadas;j++){
		
		material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		
		for(i = 0; i < 16;i++){
			layerXlinha[j][i] = new THREE.Mesh( geometry, material );

			layerXlinha[j][i].material.transparent = true;

			layerXlinha[j][i].position.z = posicaoZ;

			if(i==0){
				layerXlinha[j][i].position.x = 0.85; // -
				layerXlinha[j][i].position.y = 4.1041;
			}
			if(i==1){
				layerXlinha[j][i].position.x = 2.301; // \
				layerXlinha[j][i].position.y = 3.5031;
				layerXlinha[j][i].rotation.z = 2.35619;
			}
			if(i==2){
				layerXlinha[j][i].position.x = 3.503; // \
				layerXlinha[j][i].position.y = 2.3011; 
				layerXlinha[j][i].rotation.z = 2.35619;
			}
			if(i==3){
				layerXlinha[j][i].position.x = 4.1041; // |
				layerXlinha[j][i].position.y = 0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==4){
				layerXlinha[j][i].position.x = 4.1041; // |
				layerXlinha[j][i].position.y = -0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==5){
				layerXlinha[j][i].position.x = 3.503; // /
				layerXlinha[j][i].position.y = -2.3011;
				layerXlinha[j][i].rotation.z = -2.35619;
			}
			if(i==6){
				layerXlinha[j][i].position.x = 2.301; 
				layerXlinha[j][i].position.y = -3.5031; // /
				layerXlinha[j][i].rotation.z = -2.35619; 
			}
			if(i==7){
				layerXlinha[j][i].position.x = 0.85;// -
				layerXlinha[j][i].position.y = -4.1041;
			}
			if(i==8){
				layerXlinha[j][i].position.x = -0.85;// -	
				layerXlinha[j][i].position.y = -4.1041;
			}
			if(i==9){
				layerXlinha[j][i].position.x = -2.301;// \
				layerXlinha[j][i].position.y = -3.5031;
				layerXlinha[j][i].rotation.z = -0.78531;
			}
			if(i==10){
				layerXlinha[j][i].position.x = -3.503; //\
				layerXlinha[j][i].position.y = -2.3011;
				layerXlinha[j][i].rotation.z = -0.78531;
			}
			if(i==11){
				layerXlinha[j][i].position.x = -4.1041;//|
				layerXlinha[j][i].position.y = -0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==12){
				layerXlinha[j][i].position.x = -4.1041;//|
				layerXlinha[j][i].position.y = 0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==13){
				layerXlinha[j][i].position.x = -3.503;// /
				layerXlinha[j][i].position.y = 2.3011;
				layerXlinha[j][i].rotation.z = 0.78531;
			}
			if(i==14){
				layerXlinha[j][i].position.x = -2.301;// /
				layerXlinha[j][i].position.y = 3.5031;
				layerXlinha[j][i].rotation.z = 0.78531;
			}
			if(i==15){
				layerXlinha[j][i].position.x = -0.85;// -
				layerXlinha[j][i].position.y = 4.1041;
			}
			layerXlinha[j][i].visible=true;
			scene.add( layerXlinha[j][i]);
		}
		posicaoZ+=-3;
	}
	}
	function Cenario4lados(){
		descendo = false;
		altura = 0;
		scene.rotation.z = 0;
		deslocamentoLinha = 0;
	LinhaAtualJogador = 7;
	camera.position.x = 0.85;
	camera.position.y = -2.4;
	posicaoZ = 24;
		for(j = 0; j < quantidadeCamadas;j++){
		material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		
		for(i = 0; i < 16;i++){
			layerXlinha[j][i] = new THREE.Mesh( geometry, material );
		
			layerXlinha[j][i].material.transparent = true;
			
			layerXlinha[j][i].position.z = posicaoZ;
			
			
			layerXlinha[j][i].position.y=-4;
			if(i==0){
				layerXlinha[j][i].position.x = 0.85; // -
				layerXlinha[j][i].position.y = 3.4;
			}
			if(i==1){
				layerXlinha[j][i].position.x = 2.55; // -
				layerXlinha[j][i].position.y = 3.4;
			}
			if(i==2){
				layerXlinha[j][i].position.x = 3.4; // |
				layerXlinha[j][i].position.y = 2.55; 
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==3){
				layerXlinha[j][i].position.x = 3.4; // |
				layerXlinha[j][i].position.y = 0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==4){
				layerXlinha[j][i].position.x = 3.4; // |
				layerXlinha[j][i].position.y = -0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==5){
				layerXlinha[j][i].position.x = 3.4; // |
				layerXlinha[j][i].position.y = -2.55;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==6){
				layerXlinha[j][i].position.x = 2.55;; 
				layerXlinha[j][i].position.y = -3.4; // -
			}
			if(i==7){
				layerXlinha[j][i].position.x = 0.85;// -
				layerXlinha[j][i].position.y = -3.4;
			}
			if(i==8){
				layerXlinha[j][i].position.x = -0.85;// -	
				layerXlinha[j][i].position.y = -3.4;
			}
			if(i==9){
				layerXlinha[j][i].position.x = -2.55;// -
				layerXlinha[j][i].position.y = -3.4;
			}
			if(i==10){
				layerXlinha[j][i].position.x = -3.4; //|
				layerXlinha[j][i].position.y = -2.55;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==11){
				layerXlinha[j][i].position.x = -3.4;//|
				layerXlinha[j][i].position.y = -0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==12){
				layerXlinha[j][i].position.x = -3.4;//|
				layerXlinha[j][i].position.y = 0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==13){
				layerXlinha[j][i].position.x = -3.4;//|
				layerXlinha[j][i].position.y = 2.55;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==14){
				layerXlinha[j][i].position.x = -2.55;// -
				layerXlinha[j][i].position.y = 3.4;
			}
			if(i==15){
				layerXlinha[j][i].position.x = -0.85;// -
				layerXlinha[j][i].position.y = 3.4;
			}
			layerXlinha[j][i].visible=true;
			scene.add( layerXlinha[j][i]);
		}

		posicaoZ+=-3;
	}
	}
	function CenarioPlano(){
		descendo = false;
		altura = 0;
		scene.rotation.z = 0;
	deslocamentoLinha = 0;
	camera.position.x = 0.85;
	LinhaAtualJogador = 7;
	camera.position.y = -2.4;
	posicaoZ = 24;
		for(j = 0; j < quantidadeCamadas;j++){
		material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		
		for(i = 0; i < 16;i++){
			layerXlinha[j][i] = new THREE.Mesh( geometry, material );
		
			layerXlinha[j][i].material.transparent = true;
			
			layerXlinha[j][i].position.z = posicaoZ;
			
			
			layerXlinha[j][i].position.y=-3.4;
					if(i==0){
				layerXlinha[j][i].position.x = 12.75;
			}
			if(i==1){
				layerXlinha[j][i].position.x = 11.05;
			}
			if(i==2){
				layerXlinha[j][i].position.x = 9.35;
			}
			if(i==3){
				layerXlinha[j][i].position.x = 7.65;
			}
			if(i==4){
				layerXlinha[j][i].position.x = 5.95;
			}
			if(i==5){
				layerXlinha[j][i].position.x = 4.25;
			}
			if(i==6){
				layerXlinha[j][i].position.x = 2.55;
			}
			if(i==7){
				layerXlinha[j][i].position.x = 0.85;
			}
			if(i==8){
				layerXlinha[j][i].position.x = -0.85;		
			}
			if(i==9){
				layerXlinha[j][i].position.x = -2.55;
			}
			if(i==10){
				layerXlinha[j][i].position.x = -4.25;
			}
			if(i==11){
				layerXlinha[j][i].position.x = -5.95;
			}
			if(i==12){
				layerXlinha[j][i].position.x = -7.65;
			}
			if(i==13){
				layerXlinha[j][i].position.x = -9.35;
			}
			if(i==14){
				layerXlinha[j][i].position.x = -11.05;
			}
			if(i==15){
				layerXlinha[j][i].position.x = -12.75;
			}
	
			layerXlinha[j][i].visible=true;
			scene.add( layerXlinha[j][i]);
		}

		posicaoZ+=-3;
	}
	}
	
	
	//////////////////////////////////////////////
	// as funcoes abaixo criam camadas no
	// formato desejado, criando um Layer desse
	// cenario e posicionando no fim do cenario
	//////////////////////////////////////////////
	
	function LayerCenario16lados(j){
			material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		
			for(i = 0; i < 16;i++){
				layerXlinha[j][i] = new THREE.Mesh( geometry, material );
				
				layerXlinha[j][i].material.transparent = true;
				
				layerXlinha[j][i].position.z = 0;
				
				auxAngulo = 2.75 * (i);
				layerXlinha[j][i].rotation.z = auxAngulo;
				
				if(i==0){
					layerXlinha[j][i].position.x = 0;
					layerXlinha[j][i].position.y = 3.9;
				}
				if(i==1){
					layerXlinha[j][i].position.x = 1.5238;
					layerXlinha[j][i].position.y = 3.6191;
				}
				if(i==2){
					layerXlinha[j][i].position.x = 2.7809;
					layerXlinha[j][i].position.y = 2.8191;
				}
				if(i==3){
					layerXlinha[j][i].position.x = 3.619;
					layerXlinha[j][i].position.y = 1.5238;
				}
				if(i==4){
					layerXlinha[j][i].position.x = 3.9;
					layerXlinha[j][i].position.y = 0;
				}
				if(i==5){
					layerXlinha[j][i].position.x = 3.619;
					layerXlinha[j][i].position.y = -1.5238;
				}
				if(i==6){
					layerXlinha[j][i].position.x = 2.7809;
					layerXlinha[j][i].position.y = -2.7809;
				}
				if(i==7){
					layerXlinha[j][i].position.x = 1.5238;
					layerXlinha[j][i].position.y = -3.619;
				}
				if(i==8){
					layerXlinha[j][i].position.x = 0;
					layerXlinha[j][i].position.y = -3.9; //arredondado para melhorar
				}
				if(i==9){
					layerXlinha[j][i].position.x = -1.5238;///
					layerXlinha[j][i].position.y = -3.619;
				}
				if(i==10){
					layerXlinha[j][i].position.x = -2.871;
					layerXlinha[j][i].position.y = -2.7809;
				}
				if(i==11){
					layerXlinha[j][i].position.x = -3.6573;
					layerXlinha[j][i].position.y = -1.5238;
				}
				if(i==12){
					layerXlinha[j][i].position.x = -3.93;
					layerXlinha[j][i].position.y = 0;
				}
				if(i==13){
					layerXlinha[j][i].position.x = -3.6572;
					layerXlinha[j][i].position.y = 1.5619;
				}
				if(i==14){
					layerXlinha[j][i].position.x = -2.8191;
					layerXlinha[j][i].position.y = 2.8191;
				}
				if(i==15){
					layerXlinha[j][i].position.x = -1.562;
					layerXlinha[j][i].position.y = 3.6191;
				}
				layerXlinha[j][i].position.z =  -35;
				layerXlinha[j][i].material.opacity = 0.0;
				
				scene.add( layerXlinha[j][i]);
			}
			auxAngulo = -1;
		
	}
	function LayerCenario8lados(j){
		material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		
		for(i = 0; i < 16;i++){
			layerXlinha[j][i] = new THREE.Mesh( geometry, material );

			layerXlinha[j][i].material.transparent = true;

			layerXlinha[j][i].position.z = posicaoZ;

			if(i==0){
				layerXlinha[j][i].position.x = 0.85; // -
				layerXlinha[j][i].position.y = 4.1041;
			}
			if(i==1){
				layerXlinha[j][i].position.x = 2.301; // \
				layerXlinha[j][i].position.y = 3.5031;
				layerXlinha[j][i].rotation.z = 2.35619;
			}
			if(i==2){
				layerXlinha[j][i].position.x = 3.503; // \
				layerXlinha[j][i].position.y = 2.3011; 
				layerXlinha[j][i].rotation.z = 2.35619;
			}
			if(i==3){
				layerXlinha[j][i].position.x = 4.1041; // |
				layerXlinha[j][i].position.y = 0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==4){
				layerXlinha[j][i].position.x = 4.1041; // |
				layerXlinha[j][i].position.y = -0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==5){
				layerXlinha[j][i].position.x = 3.503; // /
				layerXlinha[j][i].position.y = -2.3011;
				layerXlinha[j][i].rotation.z = -2.35619;
			}
			if(i==6){
				layerXlinha[j][i].position.x = 2.301; 
				layerXlinha[j][i].position.y = -3.5031; // /
				layerXlinha[j][i].rotation.z = -2.35619; 
			}
			if(i==7){
				layerXlinha[j][i].position.x = 0.85;// -
				layerXlinha[j][i].position.y = -4.1041;
			}
			if(i==8){
				layerXlinha[j][i].position.x = -0.85;// -	
				layerXlinha[j][i].position.y = -4.1041;
			}
			if(i==9){
				layerXlinha[j][i].position.x = -2.301;// \
				layerXlinha[j][i].position.y = -3.5031;
				layerXlinha[j][i].rotation.z = -0.78531;
			}
			if(i==10){
				layerXlinha[j][i].position.x = -3.503; //\
				layerXlinha[j][i].position.y = -2.3011;
				layerXlinha[j][i].rotation.z = -0.78531;
			}
			if(i==11){
				layerXlinha[j][i].position.x = -4.1041;//|
				layerXlinha[j][i].position.y = -0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==12){
				layerXlinha[j][i].position.x = -4.1041;//|
				layerXlinha[j][i].position.y = 0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==13){
				layerXlinha[j][i].position.x = -3.503;// /
				layerXlinha[j][i].position.y = 2.3011;
				layerXlinha[j][i].rotation.z = 0.78531;
			}
			if(i==14){
				layerXlinha[j][i].position.x = -2.301;// /
				layerXlinha[j][i].position.y = 3.5031;
				layerXlinha[j][i].rotation.z = 0.78531;
			}
			if(i==15){
				layerXlinha[j][i].position.x = -0.85;// -
				layerXlinha[j][i].position.y = 4.1041;
			}
				layerXlinha[j][i].position.z =  -35;
				layerXlinha[j][i].material.opacity = 0.0;
				
				scene.add( layerXlinha[j][i]);
		
		}
		}			
	function LayerCenario4lados(j){
		material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		
		for(i = 0; i < 16;i++){
			layerXlinha[j][i] = new THREE.Mesh( geometry, material );
		
			layerXlinha[j][i].material.transparent = true;
			
			layerXlinha[j][i].position.z = posicaoZ;
			
			
			layerXlinha[j][i].position.y=-4;
			if(i==0){
				layerXlinha[j][i].position.x = 0.85; // -
				layerXlinha[j][i].position.y = 3.4;
			}
			if(i==1){
				layerXlinha[j][i].position.x = 2.55; // -
				layerXlinha[j][i].position.y = 3.4;
			}
			if(i==2){
				layerXlinha[j][i].position.x = 3.4; // |
				layerXlinha[j][i].position.y = 2.55; 
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==3){
				layerXlinha[j][i].position.x = 3.4; // |
				layerXlinha[j][i].position.y = 0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==4){
				layerXlinha[j][i].position.x = 3.4; // |
				layerXlinha[j][i].position.y = -0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==5){
				layerXlinha[j][i].position.x = 3.4; // |
				layerXlinha[j][i].position.y = -2.55;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==6){
				layerXlinha[j][i].position.x = 2.55;; 
				layerXlinha[j][i].position.y = -3.4; // -
			}
			if(i==7){
				layerXlinha[j][i].position.x = 0.85;// -
				layerXlinha[j][i].position.y = -3.4;
			}
			if(i==8){
				layerXlinha[j][i].position.x = -0.85;// -	
				layerXlinha[j][i].position.y = -3.4;
			}
			if(i==9){
				layerXlinha[j][i].position.x = -2.55;// -
				layerXlinha[j][i].position.y = -3.4;
			}
			if(i==10){
				layerXlinha[j][i].position.x = -3.4; //|
				layerXlinha[j][i].position.y = -2.55;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==11){
				layerXlinha[j][i].position.x = -3.4;//|
				layerXlinha[j][i].position.y = -0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==12){
				layerXlinha[j][i].position.x = -3.4;//|
				layerXlinha[j][i].position.y = 0.85;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==13){
				layerXlinha[j][i].position.x = -3.4;//|
				layerXlinha[j][i].position.y = 2.55;
				layerXlinha[j][i].rotation.z = 3.14/2;
			}
			if(i==14){
				layerXlinha[j][i].position.x = -2.55;// -
				layerXlinha[j][i].position.y = 3.4;
			}
			if(i==15){
				layerXlinha[j][i].position.x = -0.85;// -
				layerXlinha[j][i].position.y = 3.4;
			}
				layerXlinha[j][i].position.z =  -35;
				layerXlinha[j][i].material.opacity = 0.0;
				
				scene.add( layerXlinha[j][i]);
		}

		posicaoZ+=-3;
	}				
	function LayerCenarioPlano(j){

		material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
		
		for(i = 0; i < 16;i++){
			layerXlinha[j][i] = new THREE.Mesh( geometry, material );
			layerXlinha[j][i].material.transparent = true;
			layerXlinha[j][i].position.z = posicaoZ;
			
			if(i==0){
				layerXlinha[j][i].position.x = 12.75;
			}
			if(i==1){
				layerXlinha[j][i].position.x = 11.05;
			}
			if(i==2){
				layerXlinha[j][i].position.x = 9.35;
			}
			if(i==3){
				layerXlinha[j][i].position.x = 7.65;
			}
			if(i==4){
				layerXlinha[j][i].position.x = 5.95;
			}
			if(i==5){
				layerXlinha[j][i].position.x = 4.25;
			}
			if(i==6){
				layerXlinha[j][i].position.x = 2.55;
			}
			if(i==7){
				layerXlinha[j][i].position.x = 0.85;
			}
			if(i==8){
				layerXlinha[j][i].position.x = -0.85;		
			}
			if(i==9){
				layerXlinha[j][i].position.x = -2.55;
			}
			if(i==10){
				layerXlinha[j][i].position.x = -4.25;
			}
			if(i==11){
				layerXlinha[j][i].position.x = -5.95;
			}
			if(i==12){
				layerXlinha[j][i].position.x = -7.65;
			}
			if(i==13){
				layerXlinha[j][i].position.x = -9.35;
			}
			if(i==14){
				layerXlinha[j][i].position.x = -11.05;
			}
			if(i==15){
				layerXlinha[j][i].position.x = -12.75;
			}
			layerXlinha[j][i].position.y=-3.4;
			layerXlinha[j][i].position.z =  -35;
			layerXlinha[j][i].material.opacity = 0.0;
				
			scene.add( layerXlinha[j][i]);
		}
		posicaoZ+=-3;
	
	}
	
	
	var fundo;	
texture = THREE.ImageUtils.loadTexture('img/gabinete3.jpg', {}, function() { // gabinete3 foi o escolhido, back5, back7, back8, back +-, 
renderer.render(scene);
});
	var geometry1 = new THREE.BoxGeometry( 400, 1, 400 ); //(x,y,z) de formato da peça
	var material1 = new THREE.MeshBasicMaterial( { map: texture } );
	fundo = new THREE.Mesh( geometry1, material1 );
	
	
	fundo.rotation.x = 3.1415/2;
	fundo.position.z=-100;
	
	
	scene.add( fundo);
	
	//a funcao abaixo randomiza um cenario para iniciar o jogo
	// é a primeira funcao que eh chamada para inicio do jogo
	
	function inicio(){
			
		var aux_inicio= Math.floor(Math.random()*4);
		
		if(aux_inicio == 0){	
			cenarioAtual="Plano";
			CenarioPlano();			
		}
		
		if(aux_inicio == 1){	
			cenarioAtual="4lados";
			Cenario4lados();			
		}
		
		if(aux_inicio == 2){	
			cenarioAtual="8lados";
			Cenario8lados();			
		}
		
		if(aux_inicio == 3){	
			cenarioAtual="16lados";
			Cenario16lados();			
		}
		
	}
	
	inicio();
	camera.position.z = 20;
	
	
	
	
	var perdendo = false;
	var tempoCaindo = 0;
	//a funcao abaixo faz todo o efeito da animacao do cenario
	// trazendo as pecas para frente, movimentando o cenario, etc...
	// eh o loop pricipal para o cenario
	
	var animate = function () {
		requestAnimationFrame( animate );
		
			if(perdendo == true) {
				tempoCaindo++;
				camera.position.y-=0.1;
				camera.rotation.x+=0.001;
				KeyEsquerda = false;
				KeyDireita = false;
				if(tempoCaindo > 150) morreu();  //vida = 0;
				
			}
			
		//abaixo seguem funcoes para realizar tarefas dependendo de
		// qual tecla foi pressionada.
		// as tarefas foram implemntadas nessa regiao do codigo ao invez
		// de tratados no proprio evento pois apresentaram uma resposta melhor durante o jogo
		// deixando a jogabilidade mais fluida (os eventos do teclado só setam valores para variaveis de controle).
		
		//para a seta direta:
		if(KeyDireita == true){
			
			deslocamentoLinha+=0.05;
			if(deslocamentoLinha >= 0.85) {
				LinhaAtualJogador--; 
				deslocamentoLinha = -0.85;
			}
			
			if(cenarioAtual == "16lados"){
				camera.position.x+=0.05;
				if(camera.position.x > 0.60)
				{
					camera.position.x = -0.60;
					scene.rotation.z-=0.3926991;
					LinhaAtualJogador--;
					deslocamentoLinha = -0.60;
					//LinhaAtualJogador--;
				}
			}
			
			if(cenarioAtual == "8lados"){
				camera.position.x+=0.05;
				if(camera.position.x > 0.60+0.85)
				{
					camera.position.x = -0.60-0.85;
					scene.rotation.z-= 3.1415-2.3561;
					LinhaAtualJogador--;
					deslocamentoLinha = -0.60;
					//LinhaAtualJogador--;
				}
			}
			
			if(cenarioAtual == "4lados"){
				camera.position.x+=0.05;
				if(camera.position.x > 3.10)
				{
					camera.position.x = -3.10;
					scene.rotation.z-= 3.14/2;
					LinhaAtualJogador--;
					deslocamentoLinha = -0.45;
					//LinhaAtualJogador--;
				}
			}
			
			if(cenarioAtual == "Plano"){
				camera.position.x+=0.05;
				if(camera.position.x > 1+(1.7*7))
				{
					camera.position.x = -1-(1.7*7);
					LinhaAtualJogador--;
					deslocamentoLinha = -0.15;
					//scene.rotation.z-= 3.14/2;
					//LinhaAtualJogador--;
				}
			}
		
		}
		
		//para a seta esquerda:
		if(KeyEsquerda == true){
			deslocamentoLinha-=0.05;
			if(deslocamentoLinha <= -0.85) {
				LinhaAtualJogador++;
				deslocamentoLinha = +0.85;
			}
			
			
			if(cenarioAtual == "16lados"){
				camera.position.x-=0.05;
				if(camera.position.x < -0.60)
				{
					camera.position.x = +0.60;
					scene.rotation.z+=0.3926991;
						LinhaAtualJogador++;
					deslocamentoLinha = +0.60;
					//LinhaAtualJogador++;
				}
			}
			
			if(cenarioAtual == "8lados"){
				camera.position.x-=0.05;
				if(camera.position.x < -0.60-0.85)
				{
					camera.position.x = +0.60+0.85;
					scene.rotation.z+=3.1415-2.3561;
					LinhaAtualJogador++;
					deslocamentoLinha = +0.60;
					//LinhaAtualJogador++;
				}
			}  

			if(cenarioAtual == "4lados"){
				camera.position.x-=0.05;
				if(camera.position.x < -3.10)
				{
					camera.position.x = 3.10;
					scene.rotation.z+= 3.14/2;
					LinhaAtualJogador++;
					deslocamentoLinha = +0.45;
					//LinhaAtualJogador--;
				}
			}
			
			if(cenarioAtual == "Plano"){
				camera.position.x-=0.05;
				if(camera.position.x < -1-(1.7*7))
				{
					camera.position.x = +1+(1.7*7);
					LinhaAtualJogador++;
					deslocamentoLinha = +0.15;
					//scene.rotation.z+= 3.14/2;
					//LinhaAtualJogador--;
				}
			}
				
			
		}
						
		if(descendo == true){ //caso esteja ocorrendo a situacao onde o jogador esta descento, apos um salto
			camera.position.y -= 0.1;
			altura--;
			if(altura < 0) descendo = false; //se chega a 0, desceu totalmente
		}
		if(pulando == true){ //caso o jogador ainda esteja subindo, realizando um salto e ganhando altura
			camera.position.y += 0.1;
			altura++;
			if(altura > 20){ //se maior que esse valor, deve comecar a descer
				pulando=false;
				descendo = true;
			}
			
		}				
		
		auxVelocidade += 0.00001; //com o decorrer do jogo, o incremento dessa variavel proporciona uma maior velocidade no jogo (cenario)
		for(j = 0 ; j <quantidadeCamadas;j++){
			for(i = 0; i < 16;i++){
				layerXlinha[j][i].position.z += 0.12 + auxVelocidade; //faz a peca se deslocar no eixo z
				layerXlinha[j][i].material.opacity +=  1.0003;
				
				
				
				//nesse exato ponto, e nessa exata parte do codigo é detectado quando ocorre uma queda
				//a peca precisa estar embaixo da camera, e o jogador nao pode estar no ar
				
				if(layerXlinha[j][0].position.z > 19-1 && layerXlinha[j][0].position.z < 20 && pulando == false && descendo == false){
					if(LinhaAtualJogador < 0)LinhaAtualJogador=15; //apenas acerta a posicao do jogador para evitar erros
					if(LinhaAtualJogador > 15)LinhaAtualJogador=0;	
					if(layerXlinha[j][LinhaAtualJogador].visible == false){
						//camera.position.y = -6; //faz uma queda
						
						perdendo = true;
						//morreu(); // arrumar a morte, pois nao mostra ele caindo
					} 
				}
				
				fundo.position.z+=0.0001; //anda um pouco com o fundo para dar a impressao de profundidade
				if(fundo.position.z > -30){ //se esta muito proximo, a imagem é resetada para traz
					fundo.position.z=-100;
					var aix= Math.floor(Math.random()*7);
					if(aix == 0) texture = THREE.ImageUtils.loadTexture('img/back.jpg', {}, function() {
						renderer.render(scene);
					});
					if(aix == 1) texture = THREE.ImageUtils.loadTexture('img/back2.jpg', {}, function() {
						renderer.render(scene);
					});
					if(aix == 2) texture = THREE.ImageUtils.loadTexture('img/back3.jpg', {}, function() {
						renderer.render(scene);
					});
					if(aix == 3) texture = THREE.ImageUtils.loadTexture('img/back5.jpg', {}, function() {
						renderer.render(scene);
					});
					if(aix == 4) texture = THREE.ImageUtils.loadTexture('img/back6.jpg', {}, function() {
						renderer.render(scene);
					});
					if(aix == 5) texture = THREE.ImageUtils.loadTexture('img/back7.jpg', {}, function() {
						renderer.render(scene);
					});
					if(aix >= 6) texture = THREE.ImageUtils.loadTexture('img/back8.jpg', {}, function() {
						renderer.render(scene);
					});
					
					
						var geometry1 = new THREE.BoxGeometry( 400, 1, 400 ); //(x,y,z) de formato da peça
						var material1 = new THREE.MeshBasicMaterial( { map: texture } );
						fundo = new THREE.Mesh( geometry1, material1 );
						
						
						fundo.rotation.x = 3.1415/2;
						fundo.position.z=-100;
						
						
						scene.add( fundo);
	
				
				}
			}
		}		
			
		for(j =0; j < quantidadeCamadas;j++){
			
			if(trocando == false){
				
				if(j == 1){
					
					//a sequecia de codigo abaixo randomiza uma mudanca de cenario
					// é utilizado um valor alto para diminuir as chances de ocorrerem mudanças
					// frequentes entre os cenarios
					
					var teste1 = Math.floor(Math.random()*50000);
					if(teste1 > 49960 && trocando == false){
						
						if(teste1 < 49970 && cenarioAtual != "Plano"){ //verifica se ja não eh esse o cenario
							proximoCenario = "Plano"; //coloca o cenario que sera o novo
							randomicoON = false; //desliga o randomico do cenario, retirando os obstaculos
							trocando = true; //indica que o cenario esta sendo trocado
						}
						else{ 
							if(teste1 < 49980&& cenarioAtual != "4lados"){ //idem
								proximoCenario = "4lados";
								randomicoON = false;
								trocando = true;
							}else{
								if(teste1 < 49990 && cenarioAtual != "8lados"){ //idem
									proximoCenario = "8lados";
									randomicoON = false;
									trocando = true;
								}else {
									if(teste1 < 50000 && cenarioAtual != "16lados"){ //idem
										proximoCenario = "16lados";
										randomicoON = false;
										trocando = true;
									}
								}
							}
						}
				
					contadorVolta = 18; //um contador para fazer ele dar 1 volta antes de mudar o cenario
					}
				}
				

					
				//esse if eh de extrema importancia, ele reconhece layers que passaram a posicao da camera
				// permitindo entao fazer a repeticao do cenario, colocando o layer devolta ao fim do cenario
					if(layerXlinha[j][0].position.z > 25){

						//dependendo qual o cenario atual, recria-se o layer
						if(cenarioAtual == "4lados")LayerCenario4lados(j);
						if(cenarioAtual == "8lados")LayerCenario8lados(j);
						if(cenarioAtual == "16lados")LayerCenario16lados(j);
						if(cenarioAtual == "Plano")LayerCenarioPlano(j);
						
						
						if(randomicoON == true){ //se ainda estiverem sendo randomizados os obstaculos
							var aux = Math.random()*16; //define a quantidade buracos
							for(i = 0 ; i < 16;i++){ //garante o reinicio das visibilidades dessa camada
								layerXlinha[j][i].visible=true;
							}
							for(i = 0 ; i < aux;i++) //onde serao os buracos, atribundo uma visibilidade falsa a ele
								layerXlinha[j][Math.floor(Math.random()*16)].visible=false;
						}
					}
			}
			
			//caso esteja sendo trocado o cenario:
			
			if(trocando == true){ 
				
				if( contadorVolta < 0){ //contador que garante que foi realizado uma volta completa do cenario, evitando falhas
					
					var x;
					var y;
					for(x = 0; x<quantidadeCamadas;x++){
						for(y=0;y<16;y++){
							scene.remove( layerXlinha[x][y] ); //sao removidas todas as partes do cenario
						}
					}
						
						
					//com base no proximo cenario que sera utilizado, recria-se o cenario
					// e altera-se as variaveis de controle
					
					if(proximoCenario == "4lados"){
						Cenario4lados();
						proximoCenario = "";
						cenarioAtual = "4lados";
					}
					if(proximoCenario == "8lados"){
						Cenario8lados();
						proximoCenario = "";
						cenarioAtual = "8lados";
					}
					if(proximoCenario == "16lados"){
						Cenario16lados();
						proximoCenario = "";
						cenarioAtual = "16lados";
					}
					if(proximoCenario == "Plano"){
						CenarioPlano();
						proximoCenario = "";
						cenarioAtual = "Plano";
					}
					
					
					trocando = false; //fim troca
					randomicoON = true; //volta o randomico
				}
				else{ // caso ainda nao tenha realizada um volta completa, apenas recria o layer no mesmo formato ainda
				if(layerXlinha[j][0].position.z > 25){
					contadorVolta--;
					if(cenarioAtual == "4lados")LayerCenario4lados(j);
					if(cenarioAtual == "8lados")LayerCenario8lados(j);
					if(cenarioAtual == "16lados")LayerCenario16lados(j);
					if(cenarioAtual == "Plano")LayerCenarioPlano(j);
					}
				}
			}
		}
		
		renderer.render(scene, camera);
	};

	animate();

}






///////////////////////////////////////////////////
//////// personagem ///////////////////////////////
///////////////////////////////////////////////////



function personagem(qual_personagem){
	tempo(); // funcao para saber quantos pontos o usuario esta fazendo
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 48;
    var canvas = document.createElement("canvas"); // criando o canvas do personagem
	canvas.setAttribute("id", "myCanvas");
	var ctx = canvas.getContext("2d");
    var winWidth = window.innerWidth; // pegando o tamanho da tela em X
    var winHeight = window.innerHeight; // pegando o tamanho da tela em Y
    canvas.width = winWidth * 0.8; // definindo o tamanho do canvas em X
    canvas.height = winHeight * 0.95; // definindo o tamanho do canvas em Y

    document.body.appendChild(canvas); // colocando o canvas no body

    var spriteSheet = new Image(); // Define qual personagem
    
	
	if(qual_personagem == 1){ // personagem placa de pare
		spriteSheet.src = "img/placaPare.png";
	}
	if(qual_personagem == 2){ // personagem homer
		spriteSheet.src = "img/homer.png";
	}
	if(qual_personagem == 3){ // personagem bob esponja
		spriteSheet.src = "img/bobSprite.png";
	}
	if(qual_personagem == 4){ // personagem disgaea
		spriteSheet.src = "img/disgaea.png";
	}
	if(qual_personagem == 5){ // personagem tartaruga do mario
		spriteSheet.src = "img/tartaruga.png";
	}

    var zezim = new sprite(spriteSheet, qual_personagem); // iniciando a funcao dos personagens

    window.addEventListener("keydown", keydownHandler, false);
	window.addEventListener("keyup", keyupHandler, false);
	zezim.mvDown = true;
    
    function keydownHandler(e){ // para saber quando a tecla foi precionada
        switch(e.keyCode){
            case RIGHT:
                zezim.mvRight = true;
                zezim.mvLeft = false;
                zezim.mvUp = false;
                zezim.mvDown = false;
                break;
            case LEFT:
                zezim.mvRight = false;
                zezim.mvLeft = true;
                zezim.mvUp = false;
                zezim.mvDown = false;
                break;
            case UP:
                zezim.mvRight = false;
                zezim.mvLeft = false;
                zezim.mvUp = true;
                zezim.mvDown = false;
                break;
            case DOWN:
                zezim.mvRight = false;
                zezim.mvLeft = false;
                zezim.mvUp = false;
                zezim.mvDown = true;
                break;
        }
    }
    
    function keyupHandler(e){ // para saber quando a tecla foi solta
        switch(e.keyCode){
            case RIGHT:
				zezim.mvRight = false;
				zezim.mvDown = true;
				zezim.mvLeft = false;
				zezim.mvUp = false;
                break;
			case LEFT:
				zezim.mvLeft = false;
				zezim.mvDown = true;
				zezim.mvUp = false;
				zezim.mvRight = false;
                break;
            case UP:
				zezim.mvUp = false;
				zezim.mvDown = true;
				zezim.mvLeft = false;
				zezim.mvRight = false;
                break;
            case DOWN:
				zezim.mvDown = true;
				zezim.mvLeft = false;
				zezim.mvRight = false;
				zezim.mvUp = false;
                break;
        }
    }
    
    spriteSheet.onload = function(){
        init();
    }
    
    function init(){
        //mudar a posicao inicial do personagem
        zezim.posX = (canvas.width / 3);  //Definir futuramente, muda a posicao do boneco
        zezim.posY = (canvas.height / 2);
        loop();
    }
    
    function update(){ // fica em um loop pra poder desenhar na telas
        zezim.move();
		
		if(pontosDuranteJogo >= recorde){ // verifica se a pontuacao feita foi maior que o recorde
			recorde = pontosDuranteJogo;
		}
		/*
        if(vida == 0){ // verifica quando o personagem morreu
			
            //alert("VOCÊ PERDEU !");
        }*/
    }
    
    // funcao que desenha na tela
    function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        zezim.draw(ctx);
        ctx.font = "1.8vw Arial";  //pontuacao sendo feita aqui
		ctx.fillStyle = "#FFF";  // muda a cor da pontuacao
		ctx.fillText("RECORDE: " + recorde, 10, (canvas.height * 0.05)); // define a localizacao da pontuacao
        ctx.fillText("ATUAL: " + pontosDuranteJogo, 10, (canvas.height * 0.11)); // define a localizacao da pontuacao
    }

    function loop(){ // funcao de loop 
        window.requestAnimationFrame(loop,canvas);
        update();
        draw();
    }
}

function chamaHome(){
	// tem q remover o cenario e o  personagem
	document.getElementById("myCanvas").remove();

	home();
}

function tempo(){ // funcao de tempo para fazer a pontuacao
    tempo = window.setInterval(function(){
        pontosDuranteJogo++;
        //if(pontosDuranteJogo == 5)vida = 2; // teste para perder vida, se recorde chegar a 5 perde uma vida
        //if(pontosDuranteJogo == 10)vida = 1; // se chegar a 10 perde 2 vidas
        //if(pontosDuranteJogo == 15)vida = 0; // se chegar a 15 perde 3 vidas
    }, 1000);
}

function tempoMenu(){ // funcao para fazer um easter egg no Menu
    tempoM = window.setInterval(function(){
		dormiu++;
		//console.log(dormiu);
        if(dormiu == 60){ // ficou 60 seg no menu vai dar tela Azul
			document.getElementById("backG").remove();
			document.getElementById("myDiv").remove();
			document.getElementById("pontuacao").remove();
			var telaAzul = document.createElement("img");
			telaAzul.setAttribute("src", "img/telaAzul.jpg");
			telaAzul.setAttribute("id", "telaAzul");
			document.body.appendChild(telaAzul);
		}
    }, 1000);
}
/*
function chamarAPI(backG){
	jQuery(function($){   
		function getWeather(){  //função que conecta pagina a API 
		//Campinas-SP
		$.ajax('http://api.wunderground.com/api/5f5120a1bd4b8165/conditions/q/zmw:00000.72.83729.json', { // link da API usada outra key 6a81d6141e6a87cc
		//Campinas-AL
		//$.ajax('http://api.wunderground.com/api/5f5120a1bd4b8165/conditions/q/zmw:00000.22.82993.json', {
		//Jaguariuna-SP
		//$.ajax('http://api.wunderground.com/api/5f5120a1bd4b8165/conditions/q/SP/jaguariuna.json', {
		//Araras-SP
		//$.ajax('http://api.wunderground.com/api/5f5120a1bd4b8165/conditions/q/zmw:00000.51.83671.json', {				
		dataType: 'jsonp',
			success: function(json) {
				//alert(json.current_observation.weather);
				if(json.current_observation.weather == "Rain"){		// chuva
					backG.setAttribute("src", "img/logoChuva.png"); 
				}else if(json.current_observation.weather == "Clear"){	// limpo
					backG.setAttribute("src", "img/logoSol.png"); 					
				}else if(json.current_observation.weather == "Partly Cloudy" || json.current_observation.weather == "Overcast" || json.current_observation.weather == "Mostly Cloudy"){	// parcialmente nublado
					backG.setAttribute("src", "img/logoNuvem.png"); 
				}else{											//caso não entre em nenhuma das outras respostas
					backG.setAttribute("src", "img/logoPadrao.png"); 
				}
			}
		});
		}	
		getWeather();
	})
}
*/
function home(qual_personagem){

	tempoMenu(); // chama o easter egg

	// cria o logo do jogo dependendo da API
	var backG = document.createElement("img"); 
	

	//chamarAPI(backG);


	backG.setAttribute("id", "backG");
	backG.setAttribute("class", "imgMenu");				
	document.body.appendChild(backG);

	// cria uma div para o menu
	var myDiv = document.createElement("div");
	myDiv.setAttribute("class", "myDiv");
	myDiv.setAttribute("id","myDiv");
	document.body.appendChild(myDiv);

	// cria o botao de jogar
	var botaoJogar = document.createElement("button");
	var j = document.createTextNode("Jogar");       // Create a text node
	botaoJogar.setAttribute("id", "botaoJogar");
	botaoJogar.setAttribute("class", "botao");
	botaoJogar.setAttribute("onClick", "jogar(qual_personagem)");
	botaoJogar.appendChild(j);
	document.getElementById("myDiv").appendChild(botaoJogar);

	// cria o botao de Personagem
	var botaoPersonagem = document.createElement("button");
	var p = document.createTextNode("Personagens")
	botaoPersonagem.setAttribute("id", "botaoPersonagem");
	botaoPersonagem.setAttribute("class", "botao");
	botaoPersonagem.setAttribute("onClick", "personagens()");
	botaoPersonagem.appendChild(p);
	document.getElementById("myDiv").appendChild(botaoPersonagem);

	// cria o botao de Ajuda
	var botaoAjuda = document.createElement("button");
	var a = document.createTextNode("Ajuda")
	botaoAjuda.setAttribute("id", "botaoAjuda");
	botaoAjuda.setAttribute("class", "botao");
	botaoAjuda.setAttribute("onClick", "ajuda()");
	botaoAjuda.appendChild(a);
	document.getElementById("myDiv").appendChild(botaoAjuda);

	// cria o botao Compartilhar
	var botaoCompartilhar = document.createElement("button");
	var c = document.createTextNode("Compartilhar")
	botaoCompartilhar.setAttribute("id", "botaoCompartilhar");
	botaoCompartilhar.setAttribute("class", "botao");
	botaoCompartilhar.setAttribute("onClick", "compartilhar()");
	botaoCompartilhar.appendChild(c);
	document.getElementById("myDiv").appendChild(botaoCompartilhar);
	
	pontuacao(); // chama a funcao de pontuacao
		
}

function pontuacao(){

    var url = window.location.search; // pega qual recorde a pessoa esta
	recorde = url.replace("?", ""); // deixa apenas qual o numero do recorde
	
    if(recorde == ""){ // se for a primeira vez que a pessoa esta jogando
        recorde = 99999;
    }

    var pontuacao = document.createElement("h3"); // crando a pontuacao como um h3
    pontuacao.setAttribute("id", "pontuacao");
	document.body.appendChild(pontuacao); // criando ele no body
    document.getElementById("pontuacao").innerHTML = "Pontuação: " + recorde; // escrevendo no body
}

function desbloqueiaPersonagens(){ //apartir do recorde, altera a imagem para mostrar algo desbloqueado. Verificar se o recorde esta possivel
	if(recorde > 100)document.getElementById("personagem2").src = "img/homer.jpg";
	if(recorde > 150)document.getElementById("personagem3").src = "img/bob.jpg";
	if(recorde > 175)document.getElementById("personagem4").src = "img/PerDisgaea.png";
	if(recorde > 200)document.getElementById("personagem5").src = "img/tartarugaP.png";			
}

function jogar(qual_personagem){ // funcao para limpar o menu e comecar o jogo
	dormiu = 99;
    document.getElementById("myDiv").remove();
	document.getElementById("pontuacao").remove();
	document.getElementById("backG").remove();
	createCenario(qual_personagem);	
}

function personagens(){ // funcao para limpar o menu e mostrar os personagens
	dormiu = 99;
	document.getElementById("myDiv").remove();
	document.getElementById("pontuacao").remove();
	document.getElementById("backG").remove();
	
    paginaPersonagens();
}

function ajuda(){ // abre a pagina de ajuda
	dormiu = 99;
    window.open("ajuda.html", "_blank"); // abre a pagina de ajuda
}

function compartilhar(){
	// abre a pagina de compartilhar
	dormiu = 99;
    window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2FInside-PC-Run-512604709138111%2F&amp%3Bsrc=sdkpreparse%22%2C%22_self","_blank");
}

function paginaPersonagens(){ // funcao que mostra os personagens na tela
    var p1 = document.createElement("img"); // Palaca de Pare
    p1.setAttribute("src", "img/pare.jpg");
    p1.setAttribute("id", "personagem1");
    p1.setAttribute("class", "img");
    p1.setAttribute("onClick","chamaCanvas(1)"); // criar funcao de escolha do personagem
    p1.setAttribute("onMouseOver","descricaoPersonagem('personagem1')"); // criar funcao de quando passar o mouse em cima
    p1.setAttribute("onMouseLeave","limparDescricao('personagem1')"); // criar funcao de quando tirar o mouse
    
    var p2 = document.createElement("img"); // Homer
    p2.setAttribute("src", "img/homerTrancado.jpg");
    p2.setAttribute("id", "personagem2");
    p2.setAttribute("class", "img");
    if(recorde > 100)p2.setAttribute("onClick","chamaCanvas(2)"); // criar funcao de escolha do personagem
    p2.setAttribute("onMouseOver","descricaoPersonagem('personagem2')"); // criar funcao de quando passar o mouse em cima
    p2.setAttribute("onMouseLeave","limparDescricao('personagem2')"); // criar funcao de quando tirar o mouse
    
    var p3 = document.createElement("img"); // bob
    p3.setAttribute("src", "img/bobTrancado.png");
    p3.setAttribute("id", "personagem3");
    p3.setAttribute("class", "img");
    if(recorde > 150)p3.setAttribute("onClick","chamaCanvas(3)"); // criar funcao de escolha do personagem
    p3.setAttribute("onMouseOver","descricaoPersonagem('personagem3')"); // criar funcao de quando passar o mouse em cima
    p3.setAttribute("onMouseLeave","limparDescricao('personagem3')"); // criar funcao de quando tirar o mouse
    
    var p4 = document.createElement("img"); // Disgaea
    p4.setAttribute("src", "img/PerDisgaeaTrancado.png");
    p4.setAttribute("id", "personagem4");
    p4.setAttribute("class", "img");
    if(recorde > 175)p4.setAttribute("onClick","chamaCanvas(4)"); // ARRUMAR O ONCLICK PARA SABER QUANDO PODE CLICAR OU NAO
    p4.setAttribute("onMouseOver","descricaoPersonagem('personagem4')"); // criar funcao de quando passar o mouse em cima
    p4.setAttribute("onMouseLeave","limparDescricao('personagem4')"); // criar funcao de quando tirar o mouse
    
    
    var p5 = document.createElement("img"); // tartaruga
    p5.setAttribute("src", "img/tartarugaTrancado.png");
    p5.setAttribute("id", "personagem5");
    p5.setAttribute("class", "img");
    if(recorde > 200)p5.setAttribute("onClick","chamaCanvas(5)"); // ARRUMAR O ONCLICK PARA SABER QUANDO PODE CLICAR OU NAO
    p5.setAttribute("onMouseOver","descricaoPersonagem('personagem5')"); // criar funcao de quando passar o mouse em cima
    p5.setAttribute("onMouseLeave","limparDescricao('personagem5')"); // criar funcao de quando tirar o mouse
	
	// coloca as imagens no body
	document.body.appendChild(p1); 
    document.body.appendChild(p2);
    document.body.appendChild(p3);
    document.body.appendChild(p4);
    document.body.appendChild(p5);
    
    desbloqueiaPersonagens(); // Verifica a pontuacao e muda os personagens desbloqueados
}

function limparDescricao(personagem){ //é chamada toda vez que o mouse sai dos personagens
	document.getElementById("DescricaoPersonagem").remove(); // remove a Descricao
    document.getElementById(personagem).style.border = "";	//retira a borda de selecao
    document.getElementById(personagem).style.width = "10vw"; //altera o tamanho da foto para a original
    document.getElementById(personagem).style.height = "10vw";//altera o tamanho da foto para a original
}

function descricaoPersonagem(personagem){ //eh chamda toda vez que o mouse esta sobre uma imagem

    var texto = document.createElement("h3");
    texto.setAttribute("id", "DescricaoPersonagem");
    document.body.appendChild(texto);

    if(personagem == "personagem1" ){ //este estará sempre liberado
		document.getElementById("DescricaoPersonagem").innerHTML = "Placa de Pare, é um sinal de trânsito que obriga o condutor a parar o veículo antes de entrar numa interseção rodoviária, devendo ceder a passagem a todos os veículos que transitem na via em que vai entrar. E o que faz uma placa de pare em um jogo de corrida ? Nada mais ironico...";
    }
	
	//para os demais personagens eh verificado se a imagem de bloqueio esta ativa,
	//se estiver, exibe um texto mostrando como desbloquear o personagem,
	//caso contrario, apresenta uma descricao breve do personagem com suas caracteristicas
	
	if(personagem == "personagem2"){ //personagem 2
		if(document.getElementById(personagem).src.match('img/homerTrancado')){
			document.getElementById("DescricaoPersonagem").innerHTML = "Esse personagem ainda não foi desbloqueado! Atinja um recorde de 100.";			
		}else{
			document.getElementById("DescricaoPersonagem").innerHTML = "Homer Jay Simpson é um personagem de desenho animado criado por Matt Groening que é o clássico pai de família para Os Simpsons, uma série de televisão da FOX. É o pai da família Simpson. Sua primeira aparição na televisão ocorreu em 19 de abril de 1987. Para quem acompanha a série sabe que ele está sempre vivendo novas aventuras e todos gostam dele, por isso não poderia ficar de fora de um jogo como este.";	
		}
	}
	if(personagem == "personagem3"){ //personagem 3
		if(document.getElementById(personagem).src.match('img/bobTrancado')){
			document.getElementById("DescricaoPersonagem").innerHTML = "Esse personagem ainda não foi desbloqueado! Atinja um recorde de 150.";			
		}else{
			document.getElementById("DescricaoPersonagem").innerHTML = "Bob Esponja é uma série de animação americana, criada pelo biólogo marinho e animador Stephen Hillenburg, sendo produzida e exibida pela Nickelodeon. Nada melhor que um personagem para fazer uma limpeza dentro do seu computador!";
		}
	}
    
	if(personagem == "personagem4"){ //personagem 4
		if(document.getElementById(personagem).src.match('img/PerDisgaeaTrancado')){
			document.getElementById("DescricaoPersonagem").innerHTML = "Esse personagem ainda não foi desbloqueado! Atinja um recorde de 175.";			
		}else{
			document.getElementById("DescricaoPersonagem").innerHTML = "O jogo Disgaea se situa no fictício Outro Mundo (Netherworld) e é conhecido pelo seu incomum grande número de elementos de RPG, como um complexo jogo, status extremamente altos e diálogos humorísticos. Nada mais normal que um personagem de computador dentro do nosso computador.";	
		}
	}
	if(personagem == "personagem5"){ //personagem 5
		if(document.getElementById(personagem).src.match('img/tartarugaTrancado')){
			document.getElementById("DescricaoPersonagem").innerHTML = "Esse personagem ainda não foi desbloqueado! Atinja um recorde de 200.";			
		}else{
			document.getElementById("DescricaoPersonagem").innerHTML = "O Boomerang Bro especializa-se no uso de um determinado item como arma. Em vez de jogar Martelos como o Hammer Bros., o Boomerang Bros. usa os Boomerangs que se movem para frente e para trás. Nada mais épico do que usar um representante de um cassico dos jogos em um jogo!";		
		}
	}
    
	document.getElementById(personagem).style.border = "0.3vw solid red"; //cria uma borda onde o mouse se encontra
	document.getElementById(personagem).style.width = "10vw"; //diminui o tamanho da imagem para não alterar a formatacao da pagina
	document.getElementById(personagem).style.height = "10vw"; //idem
	
}

function chamaCanvas(personagem){ // funcao para remover as imagens dos personagens e comecar o jogo
    document.getElementById("DescricaoPersonagem").remove();	
    document.getElementById("personagem1").remove();
    document.getElementById("personagem2").remove();
    document.getElementById("personagem3").remove();
    document.getElementById("personagem4").remove();
    document.getElementById("personagem5").remove();
    createCenario(personagem); // passar o personagem por parametro
}

function morreu(){
	window.location.href = 'index.html?' + recorde; // recuperar a pontuacao por url
}