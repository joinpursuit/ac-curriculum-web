<p><b>Author:</b> <span class="author-tag">Alex</span></p>
<p><b>Language:</b> <span class="language-tag">JavaScript</span></p>
<p><b>Topics:</b> <span class="topics-tags">for-loop, continue</span></p>
<p><b>Difficulty:</b> <span class="difficulty-tag">4</span></p>
<p><b>Format:</b> <span class="format-tag">coding</span></p>


<h3 class='question-header'>Question</h3>
<p class='question-text'>Write a `for` loop that counts down from 100 to 10 by 10, and then from 10 to 1 by 1.  The loop should print a single number on each line.  Use a single loop; do not use multiple loops.</p>

<h3 class='answer-header'>Answer</h3>
<pre><code class='answer-text'>
	for(var i = 100; i >= 1; i -= 1) {
		if(i > 10 && i % 10 === 0) {
			console.log(i)
		} else if(i <= 10){
			console.log(i)
		}
	}
</code></pre>