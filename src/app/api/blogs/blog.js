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
  }
];

export default blogdata;
