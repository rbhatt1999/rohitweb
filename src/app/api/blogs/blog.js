const blogdata = [
  {
    title: `From Construction to Coding: My Journey to Full Stack Development`,
    slug: `from-construction-to-coding-my-journey-to-full-stack-development`,
    id: 1,
    category_id: 3,
    description: `The story of how I went from a construction worker to a full stack developer.`,
    image: {
      src: `https://i.ibb.co/7X80NxH/From-Construction-to-Coding-My-Journey-to-Full-Stack-Development.webp`,
      alt: `From Construction to Coding: My Journey to Full Stack Development`,
    },
    owner: `Rohit Bhatt`,
    tags: [`full stack development`, `coding`, `construction`, `career change`],
    date: '2023-09-23',
    summary: `As a Civil Engineer, I never thought that my career path would lead me to become a full-stack developer. However, as I delved deeper into the world of coding, I realized that constructing a building is very similar to building a code. The skills that I acquired as a Civil Engineer, such as the ability to keep my foundation strong, make my work aesthetic and arranged, and design my work keeping worst-case scenarios in mind, have helped me tremendously in becoming a better coder.`,
    sections: [
      {
        p: `One of the most significant skills that I have learned as a Civil Engineer is the ability to keep my foundation strong. This skill has helped me to become a better coder by allowing me to stick to a concept until I understand it clearly. This has been particularly helpful when learning Data structure and algorithm concepts. By understanding the fundamentals, I can easily understand and implement more complex concepts.<br/>Another skill that I have acquired as a Civil Engineer is the ability to make my work aesthetic and arranged. This skill has helped me write better codes by preparing my projects with good instructions. This not only helps me understand my code better but also helps my Stand-Up Team understand my code. It also makes my code more readable and maintainable for others.`,
        image: {
          src: `https://i.ibb.co/Zzp2kR3/coding.webp`,
          alt: `The code is my canvas, and each line is a brushstroke in the masterpiece of my creation.`,
          caption: `The code is my canvas, and each line is a brushstroke in the masterpiece of my creation.`,
        },
      },
      {
        p: `As a Civil Engineer, I used to think that coding is not for Civil Engineers and that we only work with real-world things while computer programmers were only playing with their computers. However, when I put myself in the shoes of a programmer, I realized that they are not just playing with their computers, but they are helping the whole world to make their work easier. From building websites and apps to automate mundane tasks, programmers are making our lives easier.<br/>In conclusion, my journey to becoming a full-stack developer from a Civil Engineer has been an exciting and enlightening one. I have come to realize that the skills that I have acquired as a Civil Engineer have been incredibly beneficial in my new career. I am grateful for the opportunity to learn and grow as a developer and I am excited to see where my new skills will take me in the future.`,
      }
    ],
    advertisements: {
      show: false,
    },
    referBlog: {
      show: true,
      title: `Mastering Cross-Origin Communication with Rack CORS in Rails`,
      slug: `mastering-cross-origin-communication-with-rack-cors-in-rails`,
    },
  },
  {
    title: `Mastering Cross-Origin Communication with Rack CORS in Rails`,
    slug: `mastering-cross-origin-communication-with-rack-cors-in-rails`,
    id: 2,
    category_id: 2,
    description: `Learn how to configure Rack CORS to allow cross-origin requests in your Rails API.`,
    image: {
      src: `https://i.ibb.co/HzJLccg/cors.webp`,
      alt: `Mastering Cross-Origin Communication with Rack CORS in Rails`,
    },
    owner: `Rohit Bhatt`,
    tags: [`rails`, `cors`, `rack`, `api`],
    date: '2023-09-24',
    summary: `Web browsers have a set of rules in place to prevent web pages from accessing resources on different origins without permission. This policy, known as the same-origin policy, ensures that a web page can only access resources that have the same origin as the page itself. However, there are scenarios where web applications need to communicate with other origins for legitimate purposes, such as fetching data from an API or loading web fonts. In such cases, cross-origin resource sharing (CORS) comes into play. In this article, we will explore how to implement CORS in a Rails application and understand its significance.`,
    sections: [
      {
        h1: `Browser Cross-Origin Policy`,
        p: `The browser cross-origin policy serves the dual purpose of protecting web pages from malicious attacks and restricting the functionality of web applications. The policy safeguards against cross-site request forgery (CSRF), cross-site script inclusion (XSSI), and speculative side-channel attacks like Spectre, which can compromise the security, privacy, and integrity of web pages and their users. However, this policy also poses limitations on web applications that require legitimate cross-origin communication. To enable such scenarios, browsers support mechanisms like CORS, CORP, COEP, and COOP.`,
        list: [
          {
            h1: `Cross-Origin Resource Sharing (CORS)`,
            p: `This mechanism, based on HTTP headers, allows servers to indicate which origins are permitted to access their resources and under what conditions. CORS may involve sending preflight requests for certain cross-origin requests to check the server’s CORS policy before making the actual request.`,
          },
          {
            h1: `Cross-Origin Resource Policy (CORP)`,
            p: `CORP is an additional layer of protection that allows servers to opt-in to defense against specific cross-origin requests from other origins, including those issued with &#60;script&#62; and &#60;img&#62; elements. CORP acts as a safeguard beyond the default same-origin policy.`,
          },
          {
            h1: `Cross-Origin Embedder Policy (COEP)`,
            p: `This HTTP-header based mechanism allows a document to enforce same-origin or CORP header requirements on its subresources. COEP enables the use of features that require cross-origin isolation, such as SharedArrayBuffer or performance.measureUserAgentSpecificMemory().`,
          }
          ,
          {
            h1: `Cross-Origin Opener Policy (COOP)`,
            p: `COOP provides control over how a document can be accessed by other documents in a browsing context group, such as a tab or window. By restricting access to the document’s global object, COOP mitigates certain types of cross-site leaks.`,
          }
        ],
      },
      {
        h1: `Rack CORS in Rails`,
        p: `Rack CORS is a middleware that enables Cross-Origin Resource Sharing (CORS) for Rack-compatible web applications, including Rails. Rack serves as the web server interface for Rails, offering a modular approach for web applications to interact with web servers using a single method call. With Rack CORS, developers can easily configure CORS for their Rails API, allowing front-end applications to access API data without encountering CORS errors or security issues.`,
      },
      {
        h1: `Advantages of Using Rack CORS in Rails`,
        p: `By incorporating Rack CORS as middleware in Rails, developers can benefit from the following advantages:`,
        list: [
          {
            h1: `Seamless Integration`,
            p: `As Rack is the interface for Rails, integrating Rack CORS becomes straightforward. Rack middleware allows modification of requests or responses before or after reaching the application, making it an ideal solution for handling CORS-related tasks.`,
          },
          {
            h1: `Customization`,
            p: `Rack CORS provides flexibility to configure which origins, methods, headers, and resources are allowed or exposed in CORS requests and responses. Developers can tailor the CORS policy according to their specific requirements.`,
          }
        ]
      },
      {
        h1: `Implementing Rack CORS in Rails`,
        p: `Install the rack-cors gem by executing either gem install rack-cors or by adding gem ‘rack-cors’ to your Gemfile and running bundle install.`,
        list: [
          {
            p: `Install the rack-cors gem by executing either gem install rack-cors or by adding gem ‘rack-cors’ to your Gemfile and running bundle install.`,
          },
          {
            p: `In the config/initializers/cors.rb file, insert the following code to include the Rack CORS middleware and define your CORS policy:`,
          }
        ],
        html: {
          type: "code",
          value: `Rails.application.config.middleware.insert_before 0, Rack::Cors do
          allow do
            # Specify which origins are allowed to make CORS requests
            origins 'localhost:3000', 'example.com'
        
            # Specify which resources are allowed and which methods and headers are supported
            resource '/api/*',
              headers: :any,
              methods: [:get, :post, :put, :patch, :delete, :options, :head],
              expose: ['X-Total-Count', 'Link'], # Optional: specify which response headers are exposed to the browser
              max_age: 86400 # Optional: specify how long the preflight request cache should last
          end
      end`,
          language: "ruby",
        },
      },
      {
        h1: `Restart your Rails server for the changes to take effect`,
        p: `By adjusting the values of the origins, resource, headers, methods, expose, and max_age options, you can customize the CORS policy to meet your application’s specific requirements. Multiple allow blocks can be added to define different policies for different origins or resources.`,
      },
      {
        h1: `Conclusion`,
        p: `The browser cross-origin policy serves as a crucial security measure, preventing unauthorized access to web resources. However, it can hinder legitimate cross-origin communication needed by web applications. By utilizing Rack CORS as middleware in a Rails application, developers can easily enable and customize CORS, ensuring seamless interaction between front-end apps and back-end APIs. Rack CORS empowers developers to define their CORS policies, allowing controlled access to resources and preventing CORS-related issues. Implementing Rack CORS in Rails helps developers strike a balance between security and functionality, providing a robust foundation for building web applications with effective cross-origin communication capabilities.`,
      }
    ],
    advertisements: {
      show: false,
    },
    referBlog: {
      show: true,
      title: `From Construction to Coding: My Journey to Full Stack Development`,
      slug: `from-construction-to-coding-my-journey-to-full-stack-development`,
    },
  },
  {
    title: `Next.js vs Vue, Angular, Go, and Ruby on Rails: Which Framework is Right for You?`,
    slug: `next-js-vs-vue-angular-go-and-ruby-on-rails-which-framework-is-right-for-you`,
    id: 3,
    category_id: 1,
    description: `Next.js: The JavaScript framework that's revolutionizing web development, with performance, SEO, and ease of use in mind.`,
    image: {
      src: `https://i.ibb.co/947mxx7/Next-js-vs-Vue-Angular-Go-and-Ruby-on-Rails-Which-Framework-is-Right-for-You.webp`,
      alt: `Next.js vs Vue, Angular, Go, and Ruby on Rails: Which Framework is Right for You?`,
    },
    owner: `Rohit Bhatt`,
    tags: ['next.js', 'next.js vs vue', 'next.js vs angular', 'next.js vs go', 'next.js vs ruby on rails', 'next.js performance', 'next.js SEO', 'next.js features', 'next.js benefits', 'how to build a web application with next.js'],
    date: '2023-10-01',
    summary: `In the fast-paced world of web development, the choice of framework can be critical. Next.js has emerged as a strong competitor, revolutionizing the way we build web applications. Next.js has had a transformative impact on the world of web development. With the recent release of Next.js 13, there are several new features and enhancements that web developers should be aware of. This blog explores the world of Next.js, comparing it to other prominent frameworks.`,
    sections: [
      {
        h1: `What's Next.js All About?`,
        p: `Next.js, the popular React framework for building server-rendered React applications, has been a game-changer since its release. It's based on a popular language called JavaScript, which many developers already know. What makes Next.js special is that it takes care of a lot of tricky things that can slow down websites. Next.js is not just another framework; it's an open-source powerhouse built on top of Node.js and centered around React. It boasts an exceptional developer experience coupled with an ocean of built-in features.`,
        subSections: [
          {
            h2: `Code Splitting`,
            p: `Code splitting is the process of dividing your code into smaller bundles, which are only loaded when needed. This can significantly improve page load times, especially for large applications.<br/>Next.js automatically splits your code into bundles based on the routes in your application. For example, if you have a route for the homepage and a route for a blog post, Next.js will create two bundles: one for the homepage and one for the blog post.<br/>When a user visits a page, Next.js only loads the bundle that contains the code for that page. This can significantly improve page load times, especially for users who are visiting pages that are deep within your application.`,
          },
          {
            h2: `Client-side Routing`,
            p: `Next.js provides a simple and intuitive way to manage routing in your application. You can create routes as files in the pages directory and use the built-in Link component to link between them.<br/>The Link component takes a href prop, which specifies the route that you want to navigate to. When a user clicks on a Link component, Next.js will load the specified route.<br/>Next.js also provides a number of other features for managing routing, such as nested routing and dynamic routing.`,
          },
          {
            h2: `Pre-rendering`,
            p: `Next.js can pre-render your pages at build time or on demand. Pre-rendering involves generating the HTML for your pages before they are served to the user. This can improve performance and SEO.<br/>Next.js offers two forms of pre-rendering:`,
            list: [
              {
                h1: `Static generation`,
                p: `Static generation generates the HTML for your pages at build time. The pre-rendered HTML is then reused on each request.`,
              },
              {
                h1: `Server-side rendering`,
                p: `Server-side rendering generates the HTML for your pages on demand. This can be slower than static generation, but it allows you to render pages with dynamic content.`,
              }
            ]
          },
          {
            p: `Next.js lets you choose which pre-rendering method to use for each page. You can create a “hybrid” Next.js app using static generation for most pages and using server-side rendering for others.`,
          },
          {
            h2: `API Routes`,
            p: `Next.js lets you easily create API endpoints as Node.js serverless functions. This can be useful for building microservices or for providing data to your front-end application.<br/>To create an API route, simply create a function in the app/api directory. The function can then be accessed using the /api/<function-name> URL.<br/>Next.js provides a number of built-in features for API routes, such as authentication and authorization.`
          },
          {
            h2: `Full Extensibility`,
            p: `Next.js is fully extensible, so you can add your own custom features and functionality. This can be done by creating plugins or by extending the Next.js core.<br/>There are a number of existing plugins and extensions available for Next.js. These plugins can add a variety of features to your application, such as support for authentication, authorization, and internationalization.<br/>If you need to add a custom feature to your Next.js application that is not already available as a plugin, you can create your own plugin or extend the Next.js core.<br/>With Next.js, developers can build websites that feel fast and smooth, giving visitors a great experience. It's used by a big community of creative minds who make all kinds of websites, from blogs to online stores. They love it because it saves them time and lets them focus on making their websites unique and special. So, whether you're a seasoned developer or just starting out, Next.js is here to make your web-building journey exciting and successful.`,
          }
        ]
      },
      {
        h1: `Next.js Comparison with Other Frameworks`,
        subSections: [
          {
            h2: `Next.js vs Vue`,
            list: [
              {
                h1: `Performance`,
                p: `Next.js has a performance advantage over Vue due to its support for server-side rendering (SSR) and static site generation (SSG).`,
              },
              {
                h1: `Features`,
                p: `Next.js has a number of features that are not available in Vue, such as automatic routing, built-in SEO support, and support for serverless functions.`,
              },
              {
                h1: `Ecosystem`,
                p: `Next.js has a larger and more active ecosystem than Vue, which means that there are more resources available to help you develop your application.`,
              }
            ]
          },{
            h2: `Next.js vs Angular`,
            list: [
              {
                h1: `Performance`,
                p: `Next.js and Angular have similar performance characteristics, but Next.js has a slight advantage due to its support for SSR and SSG.`,
              },
              {
                h1: `Features`,
                p: `Next.js and Angular are both full-featured JavaScript frameworks, but Next.js is more focused on performance and SEO.`,
              },
              {
                h1: `Ecosystem`,
                p: `Next.js has a larger and more active ecosystem than Angular, which means that there are more resources available to help you develop your application.`,
              }
            ]
          },
          {
            h2: `Next.js vs Go`,
            list: [
              {
                h1: `Performance`,
                p: `Next.js can achieve good performance with SSR and SSG, even though it is a JavaScript framework. This is because Next.js uses a number of techniques to optimize the performance of your application, such as code splitting and caching.`,
              },
              {
                h1: `Ease of use`,
                p: `Next.js is a JavaScript framework, so it is easier to learn and use than Go. This is especially beneficial for developers who are already familiar with React.`,
              },
              {
                h1: `Ecosystem`,
                p: `Next.js has a large and active ecosystem of resources. This means that there are many tutorials, documentation, and third-party libraries available to help you develop your application.`,
              }
            ]
          },
          {
            h2: `Next.js vs Ruby on Rails`,
            list: [
              {
                h1: `Performance`,
                p: `Next.js can achieve better performance than Ruby on Rails, especially for pages that are not frequently updated. This is because Next.js uses SSR and SSG to pre-render the HTML of your pages.`,
              },
              {
                h1: `SEO`,
                p: `Next.js's SSR and SSG features can also improve the SEO of your application. This is because Google and other search engines can index your static pages even if they are not updated frequently.`,
              },
              {
                h1: `Ease of use`,
                p: `Next.js is easier to learn and use than Ruby on Rails, especially for developers who are already familiar with React.`,
              },
              {
                h1: `Ecosystem`,
                p: `Next.js has a large and active ecosystem of resources. This means that many tutorials, documentation, and third-party libraries are available to help you develop your application.`,
              }
            ]
          }
        ]
      },
      {
        h1: `Conclusion`,
        p: `Next.js is a powerful and versatile JavaScript framework that can be used to build a wide variety of web applications. It offers a number of advantages over other frameworks, including performance, SEO, ease of use, and a large and active ecosystem.<br/>If you are looking for a framework that can help you build fast, reliable, and SEO-friendly web applications, then Next.js is a great choice. It is especially well-suited for developers who are already familiar with React.`,
      }
    ],
    advertisements: {
      show: false,
    },
    referBlog: {
      show: true,
      title: `Mastering Cross-Origin Communication with Rack CORS in Rails`,
      slug: `mastering-cross-origin-communication-with-rack-cors-in-rails`,
    },      
  }
];

export default blogdata;
