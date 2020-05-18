import Deck from './Deck.svelte';

const desktopItems = [
    {
        title: "",
        text: "<div><img style='display:block; margin: auto; padding-bottom: 5vh' src='eye_captain.png' alt='eye cpt logo'/><img src='eye_man.png' alt='eye man logo'/><p>A stock photography service for the AI/ML age.</p></div>"
    },
    {
        title: "Problem",
        text: "<div><p>Stock photography services resell the same images over and over, causing images purchased by customers to be generic, not unique.</p><p>Such services are necessarily limited to the photos their photographers have taken. </p><p style='font-style: italic; font-size: medium;'>image taken from thispersondoesnotexist.com</p><img src='fake_guy.png' alt='fake guy'/></div>"
    },
    {
        title: "Solution",
        text: "<div><p>Eye Captain uses adversarial GANS (generative adverserial networks) to create unique photorealistic images for each customer.</p><p>  Users can select the type of image they want, color background, time of day, number of people, and vantage point, among other things, to ensure they get the exact best image for their needs. </p><p style='font-style: italic; font-size: medium;'>image taken from thispersondoesnotexist.com</p><img src='fake_girl.png' alt='fake girl'/></div>"
    },
    {
        title: "Market Size",
        text: "<div><p>Stock photography services are projected to be a 4 billion dollar business by 2023, and are growing by 5% annually. </p><p style='font-style: italic; font-size: medium;'>Photo by Burak K from pexels.com</p><img src='market.png' alt='market'/></div>"
    },
    {
        title: "Competition",
        text: "<div><p>Shutterstock has a market cap of 1.5 billion and has seen revenue grow from 500 million in 500 million in 2016 to 623 million in 2018. </p><p> Getty Images was acquired for 2.5 billion and has over 200 million assets. <p style='font-style: italic; font-size: medium;'>Photo by Bret Watkins from pexels.com</p><img src='ocean.png' alt='market'/></p></div>"
    },
    {
        title: "Competitive Advantage",
        text: "<div><p>For businesses seeking unique or hard to capture images, we will be a #1 choice, able to generate a range of images that would be prohibitively expensive or impractical to commission in real life. </p><p>After the initial setup costs, we will face very low personnel expenses, once automated. Additional features, like logo generation, can be added in time.</p><p style='font-style: italic; font-size: medium;'>image taken from Yanghua Jin, et al. “Towards the Automatic Anime Characters Creation with Generative Adversarial Networks”  </p><img src='animation.png' alt='anime generated'/></div>"
    },
    {
        title: "Product",
        text: "<div><p>After logging in, users will be directed to a page where they can adjust various parameters to create the image they want. </p><p>Time of day, light quality, indoors/outdoors, number & type of ojects: users will see menus and sliders they'll be able to adjust to synthesize their ideal images.</p> <p style='font-style: italic; font-size: medium;'>image taken from Ting-Chun Wang, et al. “High-Resolution Image Synthesis and Semantic Manipulation with Conditional GANs”</p><img src='synthesized.png' alt='synthesized image'/></div>"
    },
    {
        title: "Business Model",
        text: "<div><p>We'll charge a monthly subscription fee, from $20 for a basic plan to $100 for premium.</p><p>Users will also be charged a nominal fee to reproduce images in their own business materials, as is standard practice. </p><p>  To obtain complete ownership of images, our Sales Team will be standing by to engage.</p><p style='font-style: italic; font-size: medium;'>image taken from Andrew Brock, et al. “Large Scale GAN Training for High Fidelity Natural Image Synthesis” </p><img src='animals.png' alt='animals image'/></div>"
    },
    {
        title: "Thank you",
        text: "<div><p>With this team and this concept, we believe we'll be able to revolutionize the stock photography space within 3-5 years. </p><p style='font-style: italic;'>This was the Svelte version of a pitch deck app. Click on the yellow text for the <a style='color: yellow; text-decoration: none;' href='http://pitch-deck-react.s3-website-us-east-1.amazonaws.com/'>React version</a>.</p><p style='font-style:  italic;'>You can read programming tutorials and see the source code at <a style='color: yellow; text-decoration: none;' href='https://www.reactever.com/'> reactever.com</a>.</p><img style='padding-top: 3vh;' src='thumbs.png' alt='thumbs image'/></div>"
    }    
];

const mobileItems = [
    {
        title: "",
        text: "<div><img style='display:block; margin: auto; padding-top: 10vh; padding-bottom: 8vh; width: 60%;' src='eye_captain.png' alt='eye cpt logo'/><img style='width: 40%; padding-bottom: 6vh;' src='eye_man.png' alt='eye man logo'/><p>A stock photography service </p><p>  for the AI/ML age.</p></div>"
    },
    {
        title: "Problem",
        text: "<div><p>Stock photography services resell the same images over and over, causing images purchased by customers to be generic, not unique.</p><p>Such services are necessarily limited to the photos their photographers have taken. </p><p style='font-style: italic; font-size: medium;'>image taken from thispersondoesnotexist.com</p><img style='width: 40%;' src='fake_guy.png' alt='fake guy'/></div>"
    },
    {
        title: "Solution",
        text: "<div><p>Eye Captain uses adversarial GANS (generative adverserial networks) to create unique photorealistic images for each customer.</p><p>  Users can select the type of image they want, color background, time of day, number of people, and vantage point, among other things, to ensure they get the exact best image for their needs. </p><p style='font-style: italic; font-size: medium;'>image taken from thispersondoesnotexist.com</p><img style='width: 40%;' src='fake_girl.png' alt='fake girl'/></div>"
    },
    {
        title: "Market Size",
        text: "<div><p>Stock photography services are projected to be a 4 billion dollar business by 2023, and are growing by 5% annually. </p><p style='font-style: italic; font-size: medium;'>Photo by Burak K from pexels.com</p><img style='width: 40%;' src='market.png' alt='market'/></div>"
    },
    {
        title: "Competition",
        text: "<div><p>Shutterstock has a market cap of 1.5 billion and has seen revenue grow from 500 million in 500 million in 2016 to 623 million in 2018. </p><p> Getty Images was acquired for 2.5 billion and has over 200 million assets. <p style='font-style: italic; font-size: medium;'>Photo by Bret Watkins from pexels.com</p><img style='width: 40%;' src='ocean.png' alt='market'/></p></div>"
    },
    {
        title: "Competitive Advantage",
        text: "<div><p>For businesses seeking unique or hard to capture images, we will be a #1 choice, able to generate a range of images that would be prohibitively expensive or impractical to commission in real life. </p><p>After the initial setup costs, we will face very low personnel expenses, once automated. Additional features, like logo generation, can be added in time.</p><p style='font-style: italic; font-size: medium;'>image taken from Yanghua Jin, et al. “Towards the Automatic Anime Characters Creation with Generative Adversarial Networks”  </p><img style='width: 70%;' src='animation.png' alt='anime generated'/></div>"
    },
    {
        title: "Product",
        text: "<div><p>After logging in, users will be directed to a page where they can adjust various parameters to create the image they want. </p><p>Time of day, light quality, indoors/outdoors, number & type of ojects: users will see menus and sliders they'll be able to adjust to synthesize their ideal images.</p> <p style='font-style: italic; font-size: medium;'>image taken from Ting-Chun Wang, et al. “High-Resolution Image Synthesis and Semantic Manipulation with Conditional GANs”</p><img style='width: 80%;' src='synthesized.png' alt='synthesized image'/></div>"
    },
    {
        title: "Business Model",
        text: "<div><p>We'll charge a monthly subscription fee, from $20 for a basic plan to $100 for premium.</p><p>Users will also be charged a nominal fee to reproduce images in their own business materials, as is standard practice. </p><p>  To obtain complete ownership of images, our Sales Team will be standing by to engage.</p><p style='font-style: italic; font-size: medium;'>image taken from Andrew Brock, et al. “Large Scale GAN Training for High Fidelity Natural Image Synthesis” </p><img style='width: 70%;' src='animals.png' alt='animals image'/></div>"
    },
    {
        title: "Thank you",
        text: "<div><p>With this team and this concept, we believe we'll be able to revolutionize the stock photography space within 3-5 years. </p><p style='font-style: italic;'>This was the Svelte version of a pitch deck app. Click on the yellow text for the <a style='color: yellow; text-decoration: none;' href='http://pitch-deck-react.s3-website-us-east-1.amazonaws.com/'>React version</a>.</p><p style='font-style:  italic;'>You can read programming tutorials and see the source code at <a style='color: yellow; text-decoration: none;' href='https://www.reactever.com/'> reactever.com</a>.</p><img style='padding-top: 3vh; width: 40%;' src='thumbs.png' alt='thumbs image'/></div>"
    }
];

const app = new Deck({
	target: document.body,
	props: {
            infoDesk: desktopItems,
            infoMobile: mobileItems
	}
});

export default app;
