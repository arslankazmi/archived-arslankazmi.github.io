<!DOCTYPE html>
<html>
  <head>
    {% seo %}
    
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="https://arslankazmi.github.io/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://arslankazmi.github.io/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://arslankazmi.github.io/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://arslankazmi.github.io/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon-precomposed" sizes="60x60" href="https://arslankazmi.github.io/apple-touch-icon-60x60.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://arslankazmi.github.io/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon-precomposed" sizes="76x76" href="https://arslankazmi.github.io/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://arslankazmi.github.io/apple-touch-icon-152x152.png" />
<link rel="icon" type="image/png" href="https://arslankazmi.github.io/favicon-196x196.png" sizes="196x196" />
<link rel="icon" type="image/png" href="https://arslankazmi.github.io/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/png" href="https://arslankazmi.github.io/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="https://arslankazmi.github.io/favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="https://arslankazmi.github.io/favicon-128.png" sizes="128x128" />
<meta name="application-name" content="Arslan Kazmi | Time traveling at a rate of 1 sec per sec."/>
<meta name="msapplication-TileColor" content="#16B5AA" />
<meta name="msapplication-TileImage" content="https://arslankazmi.github.io/mstile-144x144.png" />
<meta name="msapplication-square70x70logo" content="https://arslankazmi.github.io/mstile-70x70.png" />
<meta name="msapplication-square150x150logo" content="https://arslankazmi.github.io/mstile-150x150.png" />
<meta name="msapplication-wide310x150logo" content="https://arslankazmi.github.io/mstile-310x150.png" />
<meta name="msapplication-square310x310logo" content="https://arslankazmi.github.io/mstile-310x310.png" />
<meta name="msapplication-notification" content="frequency=30;polling-uri=http://notifications.buildmypinnedsite.com/?feed=https://arslankazmi.github.io/feed.xml&amp;id=1;polling-uri2=http://notifications.buildmypinnedsite.com/?feed=https://arslankazmi.github.io/feed.xml&amp;id=2;polling-uri3=http://notifications.buildmypinnedsite.com/?feed=https://arslankazmi.github.io/feed.xml&amp;id=3;polling-uri4=http://notifications.buildmypinnedsite.com/?feed=https://arslankazmi.github.io/feed.xml&amp;id=4;polling-uri5=http://notifications.buildmypinnedsite.com/?feed=https://arslankazmi.github.io/feed.xml&amp;id=5;cycle=1" />

    <!--[if lt IE 9]>
      <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <script src="/scripts/anchor.min.js"></script>
    <script>
    

document.addEventListener("DOMContentLoaded", function(event) {
 
  
  anchors.options = {
  placement: 'right',
  visible: 'touch',
  icon: ''
};
  
  anchors.add();
  anchors.add('h1');
  //anchors.add('.post > h1','.post > h2','.post > h3','.post > h4','.post > h5','.post > h6');
});

</script>
    
    <link rel="stylesheet" type="text/css" href="{{ site.baseurl }}/style.css" />
    
    <link rel="alternate" type="application/rss+xml" title="{{ site.name }} - {{ site.description }}" href="{{ site.baseurl }}/feed.xml" />

    
  </head>
  <script>anchors.options.placement = 'left';anchors.add('.post-content > h2, .post-content > h3, .post-content > h4, .post-content > h5, .post-content > h6');</script>
  <body>
  <div id="bg">
      <img src="{{ page.bgimg}}" alt="">
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
