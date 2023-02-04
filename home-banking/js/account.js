const {createApp}=Vue

createApp({
    data(){
        return{
            dates:null,
            url:"http://localhost:8080/api/clients/",
            firstClient:"",
            lastNameClient:"",
            emailClient:"",
            numberAccount:"",
            accountsClient:[]

        }
    },created(){
        this.loadData()
    },methods:{

        loadData(){
            axios.get("http://localhost:8080/api/clients/")
            .then((response)=>{
                console.log(response)
                this.dates=response;
                this.firstClient=this.dates[0].firstName;
                console.log(this.firstlient)
                this.lastNameClient=this.dates[0].lastName;
                this.emailClient=this.dates[0].email;
                this.accountsClient=this.dates[0].account;

            })
            
        }
    
    
    }
}).mount('#App')