$(document).ready(function () {
Highcharts.chart('generalpie', {
   "chart":{
      "type":"pie",
      "polar":false,
      "borderRadius":5,
      "borderColor":"#fafafa",
      "style":{
         "fontFamily":"Arial",
         "color":"#333",
         "fontSize":"12px",
         "fontWeight":"bold",
         "fontStyle":"normal"
      }
   },
   "plotOptions":{
      "pie":{
         "allowPointSelect":true,
         "cursor":true,
         "showInLegend":true,
         "innerSize":"60%",
         "dataLabels":{
            "enabled":false
         }
      },
      "series":{



        "point":{
            "events":{
                "click": function() {
                  if (this.index == 0)
                  {
                    document.getElementById('section-services').scrollIntoView({behavior:'smooth'});
                  }
                  else if (this.index == 1)
                  {
                    document.getElementById('section-about').scrollIntoView({behavior:'smooth'});
                  }
                }
            }
        },

         "animation":true,
         "dataLabels":{
            "style":{
               "color":"contrast",
               "fontSize":"11px",
               "fontWeight":"",
               "textOutline":""
            },
            "enabled":false
         }
      }
   },
   "title":{
      "text":""
   },
   "subtitle":{
      "text":""
   },
   "exporting":{

   },
   "yAxis":[
      {
         "title":{
            "text":""
         }
      }
   ],
   "xAxis":[
      {

      }
   ],
   "series":[
      {
         "data":[
            [
               "Employed",
               56
            ],
            [
               "Continuing Education",
               5
            ],
            [
               "Seeking Employment",
               3
            ],
            [
               "No Information",
               4
            ]
         ],
         "name":"Count",
         "turboThreshold":0
      }
   ],
   "colors":[
      "#0067F4",
      "#17C671",
      "#00B8D8",
      "#f45b5b",
      "#91e8e1"
   ],
   "legend":{
      "itemStyle":{
         "fontFamily":"Arial",
         "color":"#333333",
         "fontSize":"12px",
         "fontWeight":"normal",
         "fontStyle":"normal",
         "textOverflow":"ellipsis",
         "cursor":"pointer"
      },
      "itemHiddenStyle":{
         "fontFamily":"\"Lucida Grande\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif",
         "color":"#cccccc",
         "fontSize":"18px",
         "fontWeight":"normal",
         "fontStyle":"normal"
      }
   },
   "tooltip":{
      "backgroundColor":"rgba(255,255,255,1)",
      "borderWidth":0,
      "shared":false
   },
   "credits":{
     "enabled":false
   }
}
);









Highcharts.chart('jobpie', {
   "chart":{
      "type":"pie",
      "polar":false,
      "borderRadius":5,
      "borderColor":"#fafafa",
      "style":{
         "fontFamily":"Arial",
         "color":"#333",
         "fontSize":"12px",
         "fontWeight":"bold",
         "fontStyle":"normal"
      },
      "events":{
        "click": function() {document.getElementById("jobtitle").innerHTML = "Jobs";
                             document.getElementById("jobdesc").innerHTML = "This graph shows the job positions of the graduating undergraduates who have majored in Information Systems and are employed. Click on the graph to learn more information about each job position!"}
      }
   },
   "plotOptions":{
      "pie":{
         "allowPointSelect":true,
         "cursor":true
      },
      "series":{



        "point":{
            "events":{
                "click": function() {
                  var descriptions = {"Software Engineer":"Develops information systems by designing, developing, and installing software solutions.",
                "Software Development Consultant":"A senior level programming technician, responsible for designing, coding, testing, implementing applications systems and providing guidance to other developers within the team.",
              "Software Developer":"In charge of the entire development process for a software program",
            "Product Management":"Secure the sale of goods and services, estimate demand, develop strategies",
          "Project Manager":"Plan, budget, oversee and document all aspects of the specific project you are working on",
        "Market Data Analyst":"Experts in identifying key market statistics, interpreting findings, and helping marketing managers understand the numbers behind their marketing strategies",
      "LDP Associate":"Meet program objectives through hands-on experience, executive mentorship, advanced industry exposure, and virtual and classroom leadership training",
      "Integration Engineer":"Responsible for the development and testing of control systems for engines using digital electronics and communications",
      "Information Security Analyst":"Plan and carry out security measures to protect an organization's computer networks and systems",
      "Environmental, Health, & Safety Information":"Prevent and eliminate injury and illness to employees and assist companies to comply with safety laws",
      "Engineer":"Work in a variety of fields to analyze, develop and evaluate large-scale, complex systems",
      "Emerging Technology Innovation Analyst":"Responsible for supporting the tools and processes of a business, helping to drive innovative solutions to business problems",
      "Designer":"Create visual concepts, by hand or using computer software, to communicate ideas that inspire, inform, or captivate consumers",
      "Consulting Analyst":"Work with corporate and public sector clients, advising them on ways to improve efficiency and resolve other business problems",
      "Consultant":"Analyze a business problem from various angles by conducting research and forming and testing hypotheses",
      "Co-Founder":"Founders must wear multiple hats and determine which roles should be filled, what each role entails, and when each role is relevant",
      "Business Technology Analyst":"Work with a business to assist in technology integration",
      "Business Systems Analyst":"Responsible for the analysis, adjustment and restructuring of different aspects of a business",
      "Business Analyst":"Responsible for the analysis, adjustment and restructuring of different aspects of a business",
      "Associate Web Consultant":"Provide web design and maintenance services to companies and individuals",
      "Associate Member of Technical Staff":"Responsibilities include a number of things from deciding the software and hardware to their installation, to answering the queries related to it and the repairs that follow",
      "Associate Applications Developer":"Use programming languages and source code to create software that meets client requirements",
      "Analyst":"Help businesses implement technology solutions in a cost-effective way by determining the requirements of a project or program, and communicating them clearly to stakeholders, facilitators and partners",
      "Advisory Associate":"Support the chief advisory or the team of advisories and other specialists through technical and administrative support",
      "Web Developer":"Responsible for designing, coding and modifying websites, from layout to function and according to a client's specifications",
      "UX Designer":"Conduct user research, interviews and surveys, and then use the gathered information to create sitemaps, wireframes and prototypes",
      "Technology Development Program Associate":"Responsible for supporting the tools and processes of a business, helping to drive innovative solutions to business problems"

    };
                  var salary = {"Software Engineer":"$100,690", "Software Development Consultant":"$100,950", "Software Developer":"$102,880","Product Management":"$124,850",
                "Project Manager":"$83,860","Market Data Analyst":"$74,350","LDP Associate":"$70,000",
              "Integration Engineer":"$87,000",
            "Information Security Analyst":"$92,600",
            "Environmental, Health, & Safety Information":"$67,340",
            "Engineer":"$84,190",
            "Emerging Technology Innovation Analyst":"$65,000",
            "Designer":"$44,150",
            "Consulting Analyst":"$87,980",
            "Consultant":"$81,578",
            "Co-Founder":"N/A",
            "Business Technology Analyst":"$72,199",
            "Business Systems Analyst":"$67,901",
            "Business Analyst":"$67,901",
            "Associate Web Consultant":"$52,360",
            "Associate Member of Technical Staff":"$51,420",
            "Associate Applications Developer":"$98,260",
            "Analyst":"$81,320",
            "Advisory Associate":"$75,000",
            "Web Developer":"$64,970",
            "UX Designer":"$73,800",
            "Technology Development Program Associate":"$65,000"
          };

          var company = ["<a href='https://www.apple.com/jobs/us/'><img src='images/apple.png'></a>","<a href='https://careers.microsoft.com'><img src='images/microsoft.png'></a>","<a href='https://www.amazon.jobs'><img src='images/amazon.png'></a>","<a href='https://www.salesforce.com/company/careers'><img src='images/salesforce.png'></a>","<a href='https://www.facebook.com/careers'><img src='images/facebook.png'></a>","<a href='https://www2.deloitte.com/us/en/pages/careers/topics/careers.html'><img src='images/deloitte.png'></a>","<a href='https://www.accenture.com/us-en/careers'><img src='images/accenture.png'></a>"]
          var arr = []
          while(arr.length < 3){
              var randomnumber = Math.floor(Math.random()*7);
              if(arr.indexOf(randomnumber) > -1) continue;
              arr[arr.length] = randomnumber;
          }
                  document.getElementById("jobtitle").innerHTML = this.name;
                  document.getElementById("jobdesc").innerHTML = "Career Description: " + descriptions[this.name] + "<br><br>" + "Median Salary: " + salary[this.name] + "<br><br>" + company[arr[0]] + "<div id='spacer'>" + company[arr[1]] + "<div id='spacer'>" + company[arr[2]];
                }
            }
        },



         "dataLabels":{
            "enabled":false,
            "style":{
               "color":"contrast",
               "fontSize":"11px",
               "fontWeight":"",
               "textOutline":""
            }
         },
         "animation":true
      }
   },
   "title":{
      "text":""
   },
   "subtitle":{
      "text":""
   },
   "exporting":{

   },
   "yAxis":[
      {
         "title":{
            "text":""
         }
      }
   ],
   "xAxis":[
      {

      }
   ],
   "series":[
      {
         "data":[
            [
               "Advisory Associate",
               1
            ],
            [
               "Analyst",
               4
            ],
            [
               "Associate Applications Developer",
               1
            ],
            [
               "Associate Member of Technical Staff",
               1
            ],
            [
               "Associate Web Consultant",
               1
            ],
            [
               "Business Analyst",
               1
            ],
            [
               "Business Systems Analyst",
               2
            ],
            [
               "Business Technology Analyst",
               5
            ],
            [
               "Co-Founder",
               1
            ],
            [
               "Consultant",
               1
            ],
            [
               "Consulting Analyst",
               1
            ],
            [
               "Designer",
               2
            ],
            [
               "Emerging Technology Innovation Analyst",
               1
            ],
            [
               "Engineer",
               1
            ],
            [
               "Environmental, Health, & Safety Information",
               1
            ],
            [
               "Information Security Analyst",
               1
            ],
            [
               "Integration Engineer",
               1
            ],
            [
               "LDP Associate",
               1
            ],
            [
               "Market Data Analyst",
               1
            ],
            [
               "Product Management",
               1
            ],
            [
               "Project Manager",
               1
            ],
            [
               "Software Developer",
               3
            ],
            [
               "Software Development Consultant",
               1
            ],
            [
               "Software Engineer",
               11
            ],
            [
               "Technology Development Program Associate",
               1
            ],
            [
               "UX Designer",
               1
            ],
            [
               "Web Developer",
               2
            ]
         ],
         "name":"Count",
         "turboThreshold":0
      },
      {
         "data":[
            [
               "Advisory Associate",
               null
            ],
            [
               "Analyst",
               null
            ],
            [
               "Associate Applications Developer",
               null
            ],
            [
               "Associate Member of Technical Staff",
               null
            ],
            [
               "Associate Web Consultant",
               null
            ],
            [
               "Business Analyst",
               null
            ],
            [
               "Business Systems Analyst",
               null
            ],
            [
               "Business Technology Analyst",
               null
            ],
            [
               "Co-Founder",
               null
            ],
            [
               "Consultant",
               null
            ],
            [
               "Consulting Analyst",
               null
            ],
            [
               "Designer",
               null
            ],
            [
               "Emerging Technology Innovation Analyst",
               null
            ],
            [
               "Engineer",
               null
            ],
            [
               "Environmental, Health, & Safety Information",
               null
            ],
            [
               "Information Security Analyst",
               null
            ],
            [
               "Integration Engineer",
               null
            ],
            [
               "LDP Associate",
               null
            ],
            [
               "Market Data Analyst",
               null
            ],
            [
               "Product Management",
               null
            ],
            [
               "Project Manager",
               null
            ],
            [
               "Software Developer",
               null
            ],
            [
               "Software Development Consultant",
               null
            ],
            [
               "Software Engineer",
               null
            ],
            [
               "Technology Development Program Associate",
               null
            ],
            [
               "UX Designer",
               null
            ],
            [
               "Web Developer",
               null
            ]
         ],
         "turboThreshold":0
      }
   ],
   "colors":[
      "#0067F4",
      "#17C671",
      "#00B8D8",
      "#f45b5b",
      "#91e8e1",
      "#1565c0",
      "#ff9800",
      "#f48fb1",
      "#4a148c",
      "#bf360c",
      "#2e7d32",
      "#ffeb3b",
      "#ba68c8",
      "#e91e63",
      "#ff8a65",
      "#795548",
      "#cddc39",
      "#ad1457",
      "#9e9e9e",
      "#42a5f5",
      "#c5cae9",
      "#2196f3",
      "#a5d6a7"
   ],
   "legend":{
      "itemStyle":{
         "fontFamily":"Arial",
         "color":"#333333",
         "fontSize":"12px",
         "fontWeight":"normal",
         "fontStyle":"normal",
         "textOverflow":"ellipsis",
         "cursor":"pointer"
      },
      "itemHiddenStyle":{
         "fontFamily":"\"Lucida Grande\", \"Lucida Sans Unicode\", Verdana, Arial, Helvetica, sans-serif",
         "color":"#cccccc",
         "fontSize":"18px",
         "fontWeight":"normal",
         "fontStyle":"normal"
      },
      "enabled":false,
      "floating":false
   },
   "tooltip":{
      "backgroundColor":"rgba(255,255,255,1)",
      "borderWidth":0,
      "shared":false
   },
   "lang":{
      "contextButtonTitle":"Chart context menu",
      "printChart":"Print chart",
      "downloadPNG":"Download PNG image",
      "downloadJPEG":"Download JPEG image",
      "downloadPDF":"Download PDF document",
      "downloadSVG":"Download SVG vector image"
   },
   "credits":{
      "enabled":false
   }
}
);













var data = [{
    'id': '0.0',
    'parent': '',
    'name': 'All Students'
}, {
    'id': '1.3',
    'parent': '0.0',
    'name': 'Junior'
}, {
    'id': '1.1',
    'parent': '0.0',
    'name': 'Freshman'
}, {
    'id': '1.2',
    'parent': '0.0',
    'name': 'Sophomore'
}, {
    'id': '1.4',
    'parent': '0.0',
    'name': 'Senior'
},

{
    'parent': '1.1',
    'name': 'Global Services',
    'value': 1
},
{
    'parent': '1.1',
    'name': 'Intern',
    'value': 1
},
{
    'parent': '1.1',
    'name': 'Research Assistant',
    'value': 1
},
{
    'parent': '1.1',
    'name': 'Web Developer',
    'value': 1
},
{
    'parent': '1.2',
    'name': 'Data Tech',
    'value': 1
},
{
    'parent': '1.2',
    'name': 'Governance Analyst',
    'value': 1
},
{
    'parent': '1.2',
    'name': 'Research Assistant',
    'value': 1
},
{
    'parent': '1.2',
    'name': 'Intern',
    'value': 2
},
{
    'parent': '1.2',
    'name': 'IT',
    'value': 3
},
{
    'parent': '1.2',
    'name': 'Product Manager',
    'value': 1
},
{
    'parent': '1.2',
    'name': 'Software Engineer',
    'value': 3
},
{
    'parent': '1.2',
    'name': 'Student Affair Operations',
    'value': 1
},
{
    'parent': '1.2',
    'name': 'Technology Analyst',
    'value': 1
},
{
    'parent': '1.2',
    'name': 'Technology Developer',
    'value': 1
},
{
    'parent': '1.2',
    'name': 'Web Developer',
    'value': 1
},
{
    'parent': '1.3',
    'name': 'Application Developer',
    'value': 1
},
{
    'parent': '1.3',
    'name': 'User Experience',
    'value': 3
},
{
    'parent': '1.3',
    'name': 'Product Design',
    'value': 2
},
{
    'parent': '1.3',
    'name': 'Quality Assurance Engineer',
    'value': 1
},
{
    'parent': '1.3',
    'name': 'Software Engineer',
    'value': 5
},
{
    'parent': '1.3',
    'name': 'Product Manager',
    'value': 1
},
{
    'parent': '1.3',
    'name': 'Versatile Technologist',
    'value': 1
},
{
    'parent': '1.4',
    'name': 'Software Engineer',
    'value': 1
}
];

// Splice in transparent for the center circle
Highcharts.getOptions().colors.splice(0, 0, 'transparent');


Highcharts.chart('internshipsun', {

    chart: {
        height: '100%'
    },

    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    series: [{
        type: "sunburst",
        data: data,
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
            format: '{point.name}',
            filter: {
                property: 'innerArcLength',
                operator: '>',
                value: 16
            },
            style:{
               color:"contrast",
               fontSize:"10px",
               fontWeight:"",
               textOutline:""
            }
        },
        levels: [{
            level: 2,
            colorByPoint: true,
            dataLabels: {
                // rotationMode: 'parallel'
            }
        },
        {
            level: 3,
            colorVariation: {
                key: 'brightness',
                to: -0.5
            }
        }, {
            level: 4,
            colorVariation: {
                key: 'brightness',
                to: 0.5
            }
        }]

    }],
    tooltip: {
        headerFormat: "",
        pointFormat: 'Job Title: <b>{point.name}</b> <br>Count: <b>{point.value}</b>',
        backgroundColor:"rgba(255,255,255,1)",
      borderWidth:0
    },
    credits:{
       enabled:false
    }

});















// GROUPS:  0 Web | 1: Adobe | 2: hybrid
var data = [
  {"id": 0, "name": "Human Computer Interaction MS", "r": 150 },
  {"id": 0, "name": "Information Systems MS", "r": 50 },
  {"id": 1, "name": "Bioimaging MS", "r": 50 }];

var width = window.innerWidth,
    height = 450;

var fill = d3.scale.category10();

var nodes = [], labels = [],
    foci = [{x: 0, y: 150}, {x: 800, y: 150}, {x: 300, y: 150}];

var svg = d3.select("#bubbles").append("svg")
    .attr("width", "100%")
    .attr("height", height)
    //.attr("domflag", '');

var force = d3.layout.force()
    .nodes(nodes)
    .links([])
    .charge(-5000)
    .chargeDistance(4000)
    .gravity(0.1)
    .friction(0.8)
    .size([width, height])
    .on("tick", tick);

//var node = svg.selectAll("circle");
var node = svg.selectAll("g");

var counter = 0;

function tick(e) {
  var k = .1 * e.alpha;

  // Push nodes toward their designated focus.
  nodes.forEach(function(o, i) {
    o.y += (foci[o.id].y - o.y) * k;
    o.x += (foci[o.id].x - o.x) * k;
  });

  node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

}


var timer = setInterval(function(){

  if (nodes.length > data.length-1) { clearInterval(timer); return;}

  // var item = data[counter];
  // nodes.push({id: item.id, r: item.r, name: item.name});
  nodes.push({id:0,r:126,name:"Human Computer Interaction MS",count:3});
  nodes.push({id:0,r:70,name:"Information Systems MS",count:1});
  nodes.push({id:1,r:70,name:"Bioimaging MS",count:1})
  force.start();

  node = node.data(nodes);

  var n = node.enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
      .style('cursor', 'pointer')
      .on('mousedown', function() {
         var sel = d3.select(this);
         sel.moveToFront();
      })
      .call(force.drag);

  n.append("circle")
      .attr("r",  function(d) { return d.r; })
      .style("fill", function(d) {
        if (d.id == 0)
        {
          return "#C4183C";
        }
        else {
          return "#00B8D8";
        }

     })

  n.append("text")
    .attr("id", "bubbletext")
      .text(function(d){
        t = d.count + " students studying" + "\n\n" + d.name;
          return t;
      })
      .style("font-size", function(d) {
          return Math.min(2 * d.r, (2 * d.r - 8) / this.getComputedTextLength() * 16) + "px";
       })
      .attr("dy", ".35em")


  counter++;
}, 100);


d3.selection.prototype.moveToFront = function() {
  return this.each(function(){
    this.parentNode.appendChild(this);
  });
};

function resize() {
  width = window.innerWidth;
  force.size([width, height]);
  force.start();
}

d3.select(window).on('resize', resize);







});
