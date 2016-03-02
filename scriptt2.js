//var barvy = Object(); 
var barvy = 
{
	muzi:
	{
		Leskovec:"rgb(255,0,0)",
		Vrbno:'rgb(0,255,0)',
		Zator:'rgb(0,0,255)',
		SuchaRudna:'rgb(255,0,255)',
		StaraCervenaVoda:'rgb(255,255,0)',
		Janovice:'rgb(0,255,255)',
		Lipovalazne:'rgb(0,0,1)',
		Ryzoviste:'rgb(0,144,144)',
		SirokaNiva:'rgb(185,41,249)',
		KuneticeB:'rgb(144,240,64)',
		Liptan:'rgb(223,176,32)',
		SirokyBrodA:'rgb(32,191,144)',
		SirokyBrodB:'rgb(240,128,15)',
		KuneticeA:'rgb(159,47,112)',
		StaraVes:'rgb(143,144,223)',
		BilyPotok:'rgb(195,64,32)',
		SlezskeRudoltice:'rgb(32,80,79)',
		Milotice:'rgb(223,185,144)',
		Karlovice:'rgb(201,208,95)',
		Bridlicna:'rgb(9,255,144)',
		SuchaRudnaB:'rgb(171,123,203)',
		VrbnoB:'rgb(153,153,153)',
		Vraclavek:'rgb(153,0,153)',
		TremesnaII:'rgb(0,153,153)'
	},
	zeny:
	{
		SirokaNiva:"rgb(185,41,249)",
		Vrbno:"rgb(0,255,0)",
		Leskovec:"rgb(255,0,0)",
		Zator:"rgb(0,0,255)",
		SlezskeRudoltice:"rgb(32,80,79)",
		SvetlaHora:"rgb(153,153,153)",
		BilyPotok:"rgb(195,64,32)",
		Janovice:"rgb(0,255,255)",
		Ryzoviste:"rgb(0,144,144)",
		Vraclavek:"rgb(201,208,95)",
		VelkaKras:"rgb(255,255,95)"

	}
};
var barvy_tymy=
{
	muzi:
	{
		"(255,0,0)":'Leskovec',
		"(0,255,0)":'Vrbno',
		"(0,0,255)":'Zator',
		"(255,0,255)":'SuchaRudna',
		"(255,255,0)":'StaraCervenaVoda',
		"(0,255,255)":'Janovice',
		"(0,0,1)":'Lipovalazne',
		"(0,144,144)":'Ryzoviste',
		"(185,41,249)":'SirokaNiva',
		"(144,240,64)":'KuneticeB',
		"(223,176,32)":'Liptan',
		"(32,191,144)":'SirokyBrodA',
		"(240,128,15)":'SirokyBrodB',
		"(159,47,112)":'KuneticeA',
		"(143,144,223)":'StaraVes',
		"(195,64,32)":'BilyPotok',
		"(32,80,79)":'SlezskeRudoltice',
		"(223,185,144)":'Milotice',
		"(201,208,95)":'Karlovice',
		"(9,255,144)":'Bridlicna',
		"(171,123,203)":'SuchaRudnaB',
		"(153,153,153)":'VrbnoB',
		"(153,0,153)":'Vraclavek',
		"(0,153,153)":'TremesnaII'
	},
	zeny:
	{
		"(185,41,249)":'SirokaNiva',
		"(0,255,0)":'Vrbno',
		"(255,0,0)":'Leskovec',
		"(0,0,255)":'Zator',
		"(32,80,79)":'SlezskeRudoltice',
		"(153,153,153)":'SvetlaHora',
		"(195,64,32)":'BilyPotok',
		"(0,255,255)":'Janovice',
		"(0,144,144)":'Ryzoviste',
		"(201,208,95)":'Vraclavek',
		"(255,255,95)":'VelkaKras'
	}
};
//var pCas = Object(); 
var casy = 
{
	muzi:
	{	
		Leskovec:[],
		Vrbno:[],
		Zator:[],
		SuchaRudna:[],
		SuchaRudnaB:[],
		StaraCervenaVoda:[],
		Janovice:[],
		Lipovalazne:[],
		Ryzoviste:[],
		SirokaNiva:[],
		KuneticeB:[],
		Liptan:[],
		SirokyBrodA:[],
		SirokyBrodB:[],
		KuneticeA:[],
		StaraVes:[],
		BilyPotok:[],
		SlezskeRudoltice:[],
		Milotice:[],
		Karlovice:[],
		Bridlicna:[],
		VrbnoB:[],
		Vraclavek:[],
		TremesnaII:[]
	},
	zeny:
	{
		SirokaNiva:[],
		Vrbno:[],
		Leskovec:[],
		Zator:[],
		SlezskeRudoltice:[],
		SvetlaHora:[],
		BilyPotok:[],
		Janovice:[],
		Ryzoviste:[],
		Vraclavek:[],
		VelkaKras:[]
	}
};

var body = 
{
	muzi:
	{	
		Leskovec:[0],
		Vrbno:[0],
		Zator:[0],
		SuchaRudna:[0],
		SuchaRudnaB:[0],
		StaraCervenaVoda:[0],
		Janovice:[0],
		Lipovalazne:[0],
		Ryzoviste:[0],
		SirokaNiva:[0],
		KuneticeB:[0],
		Liptan:[0],
		SirokyBrodA:[0],
		SirokyBrodB:[0],
		KuneticeA:[0],
		StaraVes:[0],
		BilyPotok:[0],
		SlezskeRudoltice:[0],
		Milotice:[0],
		Karlovice:[0],
		Bridlicna:[0],
		VrbnoB:[0],
		Vraclavek:[0],
		TremesnaII:[0]
	},
	zeny:
	{
		SirokaNiva:[0],
		Vrbno:[0],
		Leskovec:[0],
		Zator:[0],
		SlezskeRudoltice:[0],
		SvetlaHora:[0],
		BilyPotok:[0],
		Janovice:[0],
		Ryzoviste:[0],
		Vraclavek:[0],
		VelkaKras:[0]
	}
};



var tymy = {
	muzi:[	
		"Leskovec",
		"Vrbno",
		"Zator",
		"SuchaRudna",
		"SuchaRudnaB",
		"StaraCervenaVoda",
		"Janovice",
		"Lipovalazne",
		"Ryzoviste",
		"SirokaNiva",
		"KuneticeB",
		"Liptan",
		"SirokyBrodA",
		"SirokyBrodB",
		"KuneticeA",
		"StaraVes",
		"BilyPotok",
		"SlezskeRudoltice",
		"Milotice",
		"Karlovice",
		"Bridlicna",
		"VrbnoB",
		"Vraclavek",
		"TremesnaII"],
	zeny:[
		"SirokaNiva",
		"Vrbno",
		"Leskovec",
		"Zator",
		"SlezskeRudoltice",
		"SvetlaHora",
		"BilyPotok",
		"Janovice",
		"Ryzoviste",
		"Vraclavek",
		"VelkaKras"
	]
		};

var proudari = {
	muzi:{
		pProud:[],
		lProud:[]
	},
	zeny:{
		pProud:[],
		lProud:[]
	}
}
var data;

/*var soutez= 1;
var mousePos;

function muziVsichni(tym,cas,canvas)
{
	var c = canvas.getContext("2d");
	var vyska = canvas.height;
	c.beginPath();
	if(soutez == 1)
		c.moveTo(0,vyska);
	else
		c.moveTo(100*(soutez-1),vyska-(vyska/4600*(pCas[tym][soutez-2]-1400)));
	c.strokeStyle=barvy[tym];
	c.lineTo(100*soutez,vyska-(vyska/4600*(cas-1400)));
	c.lineWidth = 2;
	c.lineCap   = 'round';	
	c.stroke();
	pCas[tym][soutez-1]=cas;
	if(tym=="VrbnopodPradedemB")
		soutez++;
}*/

function getMousePos(canvas, evt) 
{
	var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left, y: evt.clientY - rect.top
    };
}

function pixelOnMouseOver(canvas,callback)
{
	ctx = canvas.getContext("2d");
	var w = canvas.width, h=canvas.height;
	data= ctx.getImageData(0,0,w,h).data;
	canvas.addEventListener('mousemove',function(e)
	{
		if (e.offsetX === void 0) {
    Object.defineProperties(MouseEvent.prototype, {
      'offsetX': {
        get: function() {
          return this.layerX - this.target.offsetLeft;
        }
      }
      , 'offsetY': {
        get: function() {
          return this.layerY - this.target.offsetTop;
        }
      }
    });
  }
		var idx = (e.offsetY*w + e.offsetX)*4;
		var parts = Array.prototype.slice.call(data,idx,idx+4);
		mousePos = getMousePos(canvas, e);
		//document.getElementById("bbb").innerHTML=Math.floor(mousePos.x/100)+1;
		callback.apply(ctx,parts);
	},false);
}


function mouse()
{
	return Math.floor(mousePos.x/100);
}

function addTime(pohlavi,tym,time,soutez)
{
	soutez--;
	casy[pohlavi][tym][soutez]=time;
	return;
}

function pridejBarvu(pohlavi)
{
	for (var i = 0; i < tymy[pohlavi].length; i++) 
	{
		document.getElementById(tymy[pohlavi][i]).style.color=barvy[pohlavi][tymy[pohlavi][i]];
	}
}

function printGraf(canvas,zvirazni,pohlavi)
{
	var c = canvas.getContext("2d");
	var vyska = canvas.height;
	data= c.getImageData(0,0,canvas.width,vyska).data
	var rozestupy=(canvas.width/casy[pohlavi][tymy[pohlavi][1]].length)-1;
	c.clearRect(0,0,canvas.width,vyska);
	var prevod = 0;
	for(var i = 0;i<tymy[pohlavi].length;i++)
	{
		if(document.getElementById(tymy[pohlavi][i]+"inp").checked)
		{
			for(var j=0;j<casy[pohlavi][tymy[pohlavi][i]].length;j++)
			{
				if(casy[pohlavi][tymy[pohlavi][i]][j]>prevod)
					prevod=casy[pohlavi][tymy[pohlavi][i]][j];
			}
		}
	}
	for(var i = 0;i<tymy[pohlavi].length;i++)
	{
		if(document.getElementById(tymy[pohlavi][i]+"inp").checked)
		{
			for(var j=0;j<casy[pohlavi][tymy[pohlavi][i]].length;j++)
			{
				c.beginPath();
				if(j==0)
					c.moveTo(0,vyska);
				else
					c.moveTo(rozestupy*j,vyska-(vyska/(prevod-1400+10)*(casy[pohlavi][tymy[pohlavi][i]][j-1]-1400)));
				c.strokeStyle=barvy[pohlavi][tymy[pohlavi][i]];
				c.lineTo(rozestupy*(j+1),vyska-(vyska/(prevod-1400+10)*(casy[pohlavi][tymy[pohlavi][i]][j]-1400)));
				if(tymy[pohlavi][i]==zvirazni)
					c.lineWidth = 10;
				else
					c.lineWidth = 2;
				c.lineCap   = 'round';	
				c.stroke();
			}
		}
	}
}

function spocitejBody(pohlavi)
{
	var pomoc;
	for(var j=0;j<casy[pohlavi]["Leskovec"].length;j++)
	{
		for(var i = 0;i<tymy[pohlavi].length-1;i++)
		{
			for(var e = 0;e<tymy[pohlavi].length-i-1;e++)
			{
				if(casy[pohlavi][tymy[pohlavi][e]][j]>casy[pohlavi][tymy[pohlavi][e+1]][j])
				{
					pomoc=tymy[pohlavi][e];
					tymy[pohlavi][e]=tymy[pohlavi][e+1];
					tymy[pohlavi][e+1]=pomoc;
				}
			}
		}
		for(var i = 0;i<tymy[pohlavi].length;i++)
		{
			if(pohlavi=="muzi")
			{
				if(casy[pohlavi][tymy[pohlavi][i]][j]!=7000)
				{
					switch(i)
					{
						case 0:
							body[pohlavi][tymy[pohlavi][i]][j+1]=25;
							break;
						case 1:
							body[pohlavi][tymy[pohlavi][i]][j+1]=22;
							break;
						case 2:
							body[pohlavi][tymy[pohlavi][i]][j+1]=20;
							break;
						case 3:
							body[pohlavi][tymy[pohlavi][i]][j+1]=18;
							break;
						case 4:
							body[pohlavi][tymy[pohlavi][i]][j+1]=16;
							break;
						case 5:
							body[pohlavi][tymy[pohlavi][i]][j+1]=15;
							break;
						case 6:
							body[pohlavi][tymy[pohlavi][i]][j+1]=14;
							break;
						case 7:
							body[pohlavi][tymy[pohlavi][i]][j+1]=13;
							break;
						case 8:
							body[pohlavi][tymy[pohlavi][i]][j+1]=12;
							break;
						case 9:
							body[pohlavi][tymy[pohlavi][i]][j+1]=11;
							break;
						case 10:
							body[pohlavi][tymy[pohlavi][i]][j+1]=10;
							break;
						case 11:
							body[pohlavi][tymy[pohlavi][i]][j+1]=9;
							break;
						case 12:
							body[pohlavi][tymy[pohlavi][i]][j+1]=8;
							break;
						case 13:
							body[pohlavi][tymy[pohlavi][i]][j+1]=7;
							break;
						case 14:
							body[pohlavi][tymy[pohlavi][i]][j+1]=6;
							break;
						default:
							body[pohlavi][tymy[pohlavi][i]][j+1]=5;
							break;
					}
				}
				else
					body[pohlavi][tymy[pohlavi][i]][j+1]=0;
			}
			else
			{
				if(casy[pohlavi][tymy[pohlavi][i]][j]!=7000)
				{
					switch(i)
					{
						case 0:
							body[pohlavi][tymy[pohlavi][i]][j+1]=15;
							break;
						case 1:
							body[pohlavi][tymy[pohlavi][i]][j+1]=13;
							break;
						case 2:
							body[pohlavi][tymy[pohlavi][i]][j+1]=11;
							break;
						case 3:
							body[pohlavi][tymy[pohlavi][i]][j+1]=10;
							break;
						case 4:
							body[pohlavi][tymy[pohlavi][i]][j+1]=9;
							break;
						case 5:
							body[pohlavi][tymy[pohlavi][i]][j+1]=8;
							break;
						case 6:
							body[pohlavi][tymy[pohlavi][i]][j+1]=7;
							break;
						case 7:
							body[pohlavi][tymy[pohlavi][i]][j+1]=6;
							break;
						default:
							body[pohlavi][tymy[pohlavi][i]][j+1]=5;
							break;
					}
				}
				else
					body[pohlavi][tymy[pohlavi][i]][j+1]=0;
			}
		}
	}
	for(var k=0;k<tymy[pohlavi].length;k++)
	{
		for(var j=1;j<body[pohlavi]["Leskovec"].length;j++)
		{
			body[pohlavi][tymy[pohlavi][k]][0]+=body[pohlavi][tymy[pohlavi][k]][j];
		}
	}
}

function printPoradi(canvas,zvirazni,pohlavi)
{
	var pomoc;
	for(var i = 0;i<tymy[pohlavi].length-1;i++)
	{
		for(var e = 0;e<tymy[pohlavi].length-i-1;e++)
		{
			if(body[pohlavi][tymy[pohlavi][e]][0]>body[pohlavi][tymy[pohlavi][e+1]][0])
			{
				pomoc=tymy[pohlavi][e];
				tymy[pohlavi][e]=tymy[pohlavi][e+1];
				tymy[pohlavi][e+1]=pomoc;
			}
		}
	}
	var max=body[pohlavi][tymy[pohlavi][tymy[pohlavi].length-1]][0];
	var min=0;
	var last=0;
	var c = canvas.getContext("2d");
	var vyska = canvas.height;
	c.clearRect(0,0,canvas.width,vyska);
	for(var i = 0;i<tymy[pohlavi].length;i++)
	{
		last = 0;
		for(var j=1;j<body[pohlavi][tymy[pohlavi][i]].length;j++)
		{
			c.beginPath();
			if(j==1)
				c.moveTo(0,vyska);
			else
				c.moveTo(50*(j-1),vyska-(vyska/(max-min)*(last-min)));
			c.strokeStyle=barvy[pohlavi][tymy[pohlavi][i]];
			last+=body[pohlavi][tymy[pohlavi][i]][j];
			c.lineTo(50*(j),vyska-(vyska/(max-min)*(last-min)));
			if(tymy[pohlavi][i]==zvirazni)
				c.lineWidth = 10;
			else
				c.lineWidth = 2;
			c.lineCap   = 'round';	
			c.stroke();
		}
	}
}

function addProudari(pohlavi,soutez,pProud,lProud)
{
	proudari[pohlavi].pProud[soutez-1]=pProud;
	proudari[pohlavi].lProud[soutez-1]=lProud;
}

function printProudari(canvas,zvirazni,pohlavi)
{
	var c = canvas.getContext("2d");
	var vyska = canvas.height;
	c.clearRect(0,0,canvas.width,vyska);
	for(var j=0;j<proudari[pohlavi].pProud.length;j++)
	{
		c.beginPath();
		if(j==0)
			c.moveTo(0,vyska);
		else
			c.moveTo(100*j,vyska-(vyska/4600*(proudari[pohlavi].pProud[j-1]-1400)));
		c.strokeStyle="rgb(255,0,0)";
		c.lineTo(100*(j+1),vyska-(vyska/4600*(proudari[pohlavi].pProud[j]-1400)));
		if("pravy"==zvirazni)
			c.lineWidth = 10;
		else
			c.lineWidth = 2;
		c.lineCap   = 'round';	
		c.stroke();
	}
	for(var j=0;j<proudari[pohlavi].lProud.length;j++)
	{
		c.beginPath();
		if(j==0)
			c.moveTo(0,vyska);
		else
			c.moveTo(100*j,vyska-(vyska/4600*(proudari[pohlavi].lProud[j-1]-1400)));
		c.strokeStyle="rgb(0,0,255)";
		c.lineTo(100*(j+1),vyska-(vyska/4600*(proudari[pohlavi].lProud[j]-1400)));
		if("levy"==zvirazni)
			c.lineWidth = 10;
		else
			c.lineWidth = 2;
		c.lineCap   = 'round';	
		c.stroke();
	}
}

function oznac(pohlavi,co)
{
	for(var i =0;i<tymy[pohlavi].length;i++)
	{
		document.getElementById(tymy[pohlavi][i]+"inp").checked=co;
	}
}
