import axios from "axios";


async function  main() {
     const resp = await fetch("https://jsonplaceholder.typicode.com/todos");
     const json = await resp.json();
     console.log(json);
}

   async function Usingaxios(){
     const response = axios.get('https://jsonplaceholder.typicode.com/todos/1');
     log(response)
   }

main()

// if you are using axios to fetch from the backend than 3 thing to be rember first methiod if you are doing the post method than first will be your url than will be body than header wher as in get request first is url than is header 