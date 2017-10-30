---
layout: default
---


<article class="post">
  <h1>{{ page.title }}</h1>

  <div class="date">
    {{ page.date | date: "%B %e, %Y" }}
  </div>

  <div class="entry">
    {{ content }}
  </div>
  
  <div id="post-nav">
    <div >    
        {% if page.previous.url %}
        <a class="prev" href="{{page.previous.url}}">
            <span>&lt; {{page.previous.title}}</span>
        </a> 
        {% endif %} 
        {% if page.next.url %} 
        <a class="next" href="{{page.next.url}}">
            <span>{{page.next.title}} &gt;</span>
        </a> 
        {% endif %} 
    </div>
</div>

  

  {% include disqus.html %}
</article>
