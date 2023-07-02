import imageUrlBuilder from '@sanity/image-url'
// import  { createClient } from "@sanity/client";
import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'aecgnf2w', // Replace with your actual project ID
    dataset: 'production',
    apiVersion: '2023-05-03',
    useCdn: true,
    token: "sk5f50nC1xWU2j2tZMjEvh7ECihXK1KBvoxWiBYOkcFpzUS0qqcRjYZST9jcoOOtZSgpovVc1KoYPucKXSNlQNWVe2wjmldN0y5LMqjWgtHXQmoPTaKWY5SSIJt1N1Uh3DuWIFnNLvDOE7dU4sENtEOOwE9AlONEkbvzbL1ABFGk0vxT2ncy"
    
  });

//   XMLHttpRequest.toString()
  const builder = imageUrlBuilder(client);
  export const urlFor = (source) => builder.image(source)
 export default client;