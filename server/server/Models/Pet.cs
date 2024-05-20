using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace server.Models
{
    public class Pet
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string Name { get; set; }
        public DateTime? CreatedAt { get; set; } = DateTime.Now;
        public string Type { get; set; }
        public string Color { get; set; }
        public int Age { get; set; }
    }
}
