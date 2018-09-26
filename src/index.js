
module.exports = function makeExchange(currency) {
   //H=50, Q=25, D=10, N=5, P=1
    let coins=[1, 5, 10, 25, 50];
    let text=new Object();
    text.error="You are rich, my friend! We don't have so much coins for exchange";
    if(currency>10000) return text;
    if(currency<=0)    return new Object();
    let change= new Object();
    let arr=["P", "N", "D", "Q", "H"]
    change.H=0;
    change.Q=0;
    change.D=0;
    change.N=0;
    change.P=0;
    while(currency>0)
    {
        for(let i=4; i>=0; i--)
        {
            if(currency>=coins[i])
            {
                change[arr[i]]+=Math.floor(currency/coins[i]);
                currency%=coins[i]
                break;
            }
        }
    }
    for(let i=4; i>=0; i--)
    {
      if(change[arr[i]]==0)
      delete change[arr[i]];
    }
    return change;
}