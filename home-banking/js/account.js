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
        this.loadData(this.url)
    },methods:{

        loadData(url){
            axios.get(url)
            .then((response)=>{
                
                this.dates=response;
                this.firstClient=this.dates[0].firstName;
                this.lastNameClient=this.dates[0].lastName;
                this.emailClient=this.dates[0].email;
                this.accountsClient=this.dates[0].account;

            })
            console.log('dates')
        }
    
    
    }
}).mount('#App')