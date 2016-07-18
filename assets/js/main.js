var commands = [
	{
		input: 'tail /etc/motd.tail',
		output: "Hi, I'm Alex Moreno, web developer who lives in Curitiba. How can I help you?<br>"+
				"If you prefer the normal version, <a href='https://alexdev.com.br/portfolio'> click  here</a><br>"
	},{
		input: 'tail -f ./skills',
		output: "PHP, Codeigniter, Laravel 5, SlimPHP <br>"+
				"Javascript, jQuery, Node.js, React.js, Angular.js, Backbone.js, MongoDB, ES6, Typescript <br />"+
				"CSS3, HTML5, SASS/LESS, Gulp <br>"+
				"WordPress, Drupal, Magento <br>"+
				"Linux, Apache, SQL, GIT, Docker, XMPP, AWS <br />"
	},{
		input: 'ls ./projects',
		output: "<a target='_blank' href='http://piconivieira.adv.br'>Piconi-e-Vieira</a><br>"+
				"<a target='_blank' href='http://tatudobem.blog.br'>Tatudobem</a><br>"+
				"<a target='_blank' href='http://rextec.inf.br/'>RexTec</a><br>"+
				"<a target='_blank' href='http://turbopercussion.com.br'>TurboPercussion</a><br>"+
				"<a target='_blank' href='http://andreafricks.com.br'>AndreaFricks</a><br>"+
				"<a target='_blank' href='http://www.ampia.com.br'>Ampia</a><br>"
	},{
		input: 'ls ./resume',
		output: '<a href="https://registry.jsonresume.org/alexmoreno">resume</a><br>'+
				'<a href="https://github.com/alexmoreno">github</a><br>'+
				'<a href="https://www.linkedin.com/in/alex-moreno-95713a58">linkedin</a><br>'+
				'<a href="https://alexdev.com.br/portfolio">portfolio (HTML)</a><br>'

	},{
		input: 'service --status-all',
		output: '',
		timedOutput: [
				'[ + ]  translate-en-pt ',
				'[ + ]  site-development ',
				'[ + ]  system-development ',
				'[ + ]  devops '
		]

	},{
		input: 'ls -l ./contact',
		output: '<a target="_blank" href="mailto:alexmorenodealmeida@gmail.com">email</a><br> '+
				'<a target="_blank" href="http://alexdev.com.br/portfolio/#contact">form on portfolio</a><br>'
				

	},{
		input: 'visit my portfolio',
		output: 'visit: command not found <br />'
				

	},{
		
		input: 'python sqlmap.py -u "http://api.pokemon.go/api/user/0"',
		output: 'Trying to connect to server...',
		timedOutput: 
			[
				'Hacking: [#---------] 10%...',
				'Hacking: [##--------] 20%...',
				'Hacking: [###-------] 30%...',
				'Hacking: [####------] 40%...',
				'Hacking: [#####-----] 50%...',
				'Hacking: [######----] 60%...',
				'Hacking: [#######---] 70%...',
				'Hacking: [########--] 80%...',
				'Hacking: [#########-] 90%...',
				'Hacking: [##########] 100%...',
				'<br>[ACCESS GRANTED] <br>user/pass: admin/admin',
				'Vamo hackea o pokemão! Pokemon go pls come to brazil! <br>',

			 ]	
	},{
		input: 'help',
		output: 'Fork it on <a href="http://github.com/alexmoreno/METERminal">github</a> and have some fun =)'

	}

]
var commandIndex = 0;
function terminal(){
	inputCommand()
}
function inputCommand(){
	var cmd = commands[commandIndex]
	charIndex = 0
	lineIndex = 0
	$el = $('.prompt')
	$el.append('portfolio@alex:~$ ').addClass('active');

	var typeText = function(){
		setTimeout(function(){
			console.log(cmd);
			var char = cmd.input[charIndex]
			if (char == undefined) {
				
				$el.append('<br/><span class="output">' + cmd.output + '</span><br/>');
      			$el.removeClass('active');
      			setTimeout(function(){
					if (cmd.hasOwnProperty('timedOutput')) {
						typeTimedText()
					}else{
						inputCommand(++commandIndex)
					}
					
      			}, 1000)
				return
			}
			
			$el.append(char)
			charIndex++
			typeText()

			
		}, Math.round(Math.random() * 150) + 25)
	}
	var typeTimedText = function(){

		setTimeout(function(){
			text = cmd.timedOutput[lineIndex]
			if (text == undefined) {
				$el.append('<br>')
				inputCommand(++commandIndex)

				return
			}
			$el.append('<span class="output">' + text + '</span><br/>');
      		$el.removeClass('active');
      		lineIndex++;
      		typeTimedText();

		}, Math.round(Math.random() * 550) + 25)
		return
	}
	typeText()
}
terminal();
