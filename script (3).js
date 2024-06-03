document.addEventListener("DOMContentLoaded", function() {
    const main = document.getElementById("main");

    // Sample data for blog posts
    const posts = [
        {
            title: "Post Title 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit id leo sodales lacinia et vitae lectus. Vivamus sit amet lacus commodo, scelerisque nulla sed, ullamcorper felis."
        },
        {
            title: "Post Title 2",
            content: "Nulla facilisi. Donec feugiat tincidunt erat, at iaculis mauris dignissim id. Suspendisse potenti."
        }
    ];

    // Function to create a new blog post element
    function createPostElement(post) {
        const article = document.createElement("article");
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <button class="read-more">Read More</button>
            <div class="more-content">
                <p>This is additional content for ${post.title}. You can put more detailed information here.</p>
            </div>
        `;
        return article;
    }

    // Function to toggle "Read More" section
    function toggleReadMore(event) {
        const moreContent = event.target.nextElementSibling;
        moreContent.classList.toggle("show");
        const buttonText = event.target.textContent === "Read More" ? "Read Less" : "Read More";
        event.target.textContent = buttonText;
    }

    // Render all blog posts
    function renderPosts() {
        posts.forEach(post => {
            const postElement = createPostElement(post);
            postElement.querySelector(".read-more").addEventListener("click", toggleReadMore);
            main.appendChild(postElement);
        });
    }

    // Call the renderPosts function to display blog posts
    renderPosts();
});
