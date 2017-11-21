---
layout: compress
---

<!DOCTYPE html>
<html>
  <head>
  <style>
    .navigation li,
    .contact-list li {
    padding: 0 0 1rem;
    }
    html,
body,
div,
h1,
h3,
h6,
p,
a,
em,
img,
article,
header,
nav {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
header,
nav {
  display: block;
}

body {
  line-height: 1;
}

*,
*:before,
*:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

body {
  background: #fff;
  font: 18px/1.4 Helvetica, Arial, sans-serif;
  color: #333;
}

.container {
  margin: 0 auto;
  max-width: 740px;
  padding: 0 10px;
  width: 100%;
}

h1,
h3,
h6 {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  font-weight: bold;
  line-height: 1.7;
  margin: 1em 0 15px;
  padding: 0;
}

@media screen and (max-width: 640px) {
  h1,
  h3,
  h6 {
    line-height: 1.4;
  }
}

h1 {
  font-size: 30px;
  color: #1DACD6;
}

h1 a {
  color: inherit;
}

h3 {
  font-size: 20px;
  color: #007BA7;
}

h6 {
  font-size: 14px;
  color: #ccc;
}

p {
  margin: 15px 0;
}

a {
  color: #4183C4;
  text-decoration: none;
}

em {
  font-style: italic;
}

img {
  max-width: 100%;
}

.date {
  font-style: italic;
  color: #666;
}

.clearfix:before,
.clearfix:after {
  content: " ";
  display: table;
}

.clearfix:after {
  clear: both;
}

.wrapper-masthead {
  margin-bottom: 50px;
}

.masthead {
  padding: 20px 0;
  border-bottom: 1px solid #eee;
}

@media screen and (max-width: 640px) {
  .masthead {
    text-align: center;
  }
}

.site-avatar {
  float: left;
  width: 70px;
  height: 70px;
  margin-right: 15px;
}

@media screen and (max-width: 640px) {
  .site-avatar {
    float: none;
    display: block;
    margin: 0 auto;
  }
}

.site-avatar img {
  border-radius: 5px;
}

.site-info {
  float: left;
}

@media screen and (max-width: 640px) {
  .site-info {
    float: none;
    display: block;
    margin: 0 auto;
  }
}

.site-name {
  margin: 0;
  color: #333;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 300;
  font-size: 28px;
  letter-spacing: 1px;
}

.site-description {
  margin: -5px 0 0 0;
  color: #666;
  font-size: 16px;
}

@media screen and (max-width: 640px) {
  .site-description {
    margin: 3px 0;
  }
}

nav {
  float: right;
  margin-top: 23px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 18px;
}

@media screen and (max-width: 640px) {
  nav {
    float: none;
    margin-top: 9px;
    display: block;
    font-size: 16px;
  }
}

nav a {
  margin-left: 20px;
  color: #333;
  text-align: right;
  font-weight: 300;
  letter-spacing: 1px;
}

@media screen and (max-width: 640px) {
  nav a {
    margin: 0 10px;
    color: #4183C4;
  }
}

#page-wrap {
  position: relative;
  z-index: 2;
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  background: white;
}

#bg {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
}

#bg img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
}
    </style>

    {% seo %}
    
    <!-- Favicon section-->
    
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://arslankazmi.github.io/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://arslankazmi.github.io/apple-touch-icon-152x152.png" />
    <link rel="icon" type="image/png" href="https://arslankazmi.github.io/favicon-32x32.png" sizes="32x32" />
    <link rel="icon" type="image/png" href="https://arslankazmi.github.io/favicon-16x16.png" sizes="16x16" />
    <meta name="application-name" content="Arslan Kazmi | Time traveling at a rate of 1 sec per sec."/>
    <meta name="msapplication-TileColor" content="#12947E" />
    <meta name="msapplication-TileImage" content="https://arslankazmi.github.io/mstile-144x144.png" />
    <meta name="msapplication-notification" content="frequency=30;polling-uri=http://notifications.buildmypinnedsite.com/?feed=https://arslankazmi.github.io/feed.xml&amp;id=1;polling-uri2=http://notifications.buildmypinnedsite.com/?feed=https://arslankazmi.github.io/feed.xml&amp;id=2;polling-uri3=http://notifications.buildmypinnedsite.com/?feed=https://arslankazmi.github.io/feed.xml&amp;id=3;polling-uri4=http://notifications.buildmypinnedsite.com/?feed=https://arslankazmi.github.io/feed.xml&amp;id=4;polling-uri5=http://notifications.buildmypinnedsite.com/?feed=https://arslankazmi.github.io/feed.xml&amp;id=5;cycle=1" />

    <!--[if lt IE 9]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <script src="/scripts/anchor.min.js" async></script>
    <script src="/scripts/main.js" defer></script>
    
    <script>
          var cb = function() 
          {
          var l = document.createElement('link'); l.rel = 'stylesheet';
          l.href = '{{ site.baseurl }}/style.css';
          var h = document.getElementsByTagName('head')[0]; h.parentNode.insertBefore(l, h);
            
      };

      var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;

      if (raf) 
        raf(cb);
      else 
        window.addEventListener('load', cb);


    </script>
    
    <!-- <link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/style.css" /> -->
    <link rel="alternate" type="application/rss+xml" title="{{ site.name }} - {{ site.description }}" href="{{ site.baseurl }}/feed.xml" />


    
  </head>


  <body>
  <div id="bg">
     {% assign image = page.bgimg[0] %}
     {% include srcset-sizes.html %}
  </div>
  <div id="page-wrap">
    <div class="wrapper-masthead">
      <div class="container">
        <header class="masthead clearfix">
          <a href="{{ site.baseurl }}/" class="site-avatar"><img src="{{ site.avatar }}" /></a>

          <div class="site-info">
            <h1 class="site-name"><a href="{{ site.baseurl }}/">{{ site.author.name }}</a></h1>
            <p class="site-description">{{ site.description }}</p>
          </div>

          <nav>
            <a href="{{ site.baseurl }}/blog">Blog</a>
            <a href="{{ site.baseurl }}/about">About</a>
            <a href="{{ site.baseurl }}/{{ site.resumepath }}">Resume</a>
            
          </nav>
        </header>
      </div>
    </div>
  
    <div id="main" role="main" class="container">
      {{ content }}
    </div>

  

    <div class="wrapper-footer">
      <div class="container">
        <footer class="footer">
          {% include svg-icons.html %}
        </footer>
      </div>
    </div>

    {% include analytics.html %}
    
    </div>
    
  </body>
</html>
