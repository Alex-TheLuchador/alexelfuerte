using Newtonsoft.Json;

namespace Company.Function
{
    public class Counter
    {
        // Property names must match Cosmos DB
        [JsonProperty(PropertyName = "id")]
        public string Id {get; set;}

        [JsonProperty(PropertyName = "count")]
        public int Count {get; set;}
    }
}