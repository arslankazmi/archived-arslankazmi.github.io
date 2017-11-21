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
            <a href="{{ site.resumepath }}">Resume</a>
            
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
