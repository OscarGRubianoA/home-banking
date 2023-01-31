const {createAPP}=Vue

CreateApp({
    data(){
        return{
            dates:null,
            url:"http://localhost:8080/api/clients",
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
            then((response)=>{
                
                this.dates=response;
                this.firstClient=this.date.dates[0].firstName;
                this.lastNameClient=this.date.dates[0].lastName;
                this.emailClient=this.date.dates[0].email;
                this.accountsClient=this.date.dates[0].account;

            })
        }
    
    
    }
}),mount("#app")