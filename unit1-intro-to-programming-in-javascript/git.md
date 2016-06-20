<p>Author: <span class="author">Alex</span></p>
<label>Language:</label><p class="language">JavaScript</p>
<label>Topics:</label><p class="topics">for-loop, continue</p>
<label>Difficulty:</label><p class="difficulty">4</p>
<label>Topics:</label><p class="format">coding</p>

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