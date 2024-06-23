document.addEventListener('DOMContentLoaded', function() {
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    const blogPostsContainer = document.getElementById('blogPosts');
    
    posts.reverse();

    posts.forEach(post => {
        // Create and append HTML elements for each post
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post', 'post-box'); // Add styling classes
        postElement.innerHTML = `
            <h2 class = "h2">${post.title}</h2>
            <p class = "p">${post.content}</p>
            <span class = "span">-Posted by ${post.username}</span>
        `;
        blogPostsContainer.appendChild(postElement);
    });
});



document.getElementById('backButton').addEventListener('click', function () {
    window.location.href = 'index.html';
  });
