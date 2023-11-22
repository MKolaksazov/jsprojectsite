import { getAllBlogs } from "./api";

const blogContainer = document.querySelector(".blogpost-container");

const fetchMainBlogPage = async () => {
  try {
    const headerMarkup = ` <div class="blog-heading">
    <h3>My Blog</h3>
    <span>Here is my space where I write different developer focused article</span>
</div>
`
const headContainer = document.querySelector(".blog-container");
headContainer.insertAdjacentHTML("afterbegin", headerMarkup);


    const blogs = await getAllBlogs();
    blogs.map((blog) => {
      const blogMarkup = `<!--blogpost-container-->
            <div class="blogpost-box" key={${blog.title}}>
                <!--img-->
                <div class="blogpost-img">
                    <img src="${blog.featured_image}" alt="Blog">
                </div>

                <!--blogpost text-->
                <div class="blogpost-text">
                    <span class="blogpost-tag">${blog.tags[0].name}</span>
                    <a href="/blog/${blog.slug}" class="blogpost-title">${blog.title}</a>
                    <p>${blog.summary}</p>
                </div>

                <div class="blogpost-footer">
                    <div>
                        <img src="${blog.author.profile_image}" alt="avatar">
                        <p class="blogpost-name">${
                          blog.author.first_name + " " + blog.author.last_name
                        }</p>
                    </div>
                    <a class="blogpost-link" href="/blog/${blog.slug}">→</a>
                </div>
            </div>`;
      blogContainer.insertAdjacentHTML("afterbegin", blogMarkup);
    });
  } catch (error) {
    alert(error);
  }
};

fetchMainBlogPage();
