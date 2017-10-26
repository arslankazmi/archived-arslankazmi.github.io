<!DOCTYPE html>
<html>
  <head>
    <title>{% if page.title %}{{ page.title }} – {% endif %}{{ site.name }} – {{ site.description }}</title>

   
    
    {% seo %}

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
