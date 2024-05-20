using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using server.data;
using server.Models;
using System.Threading.Tasks;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PetsController : ControllerBase
    {
        private readonly ApplicationContext _context;
        public PetsController(ApplicationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> getPets()
        {
            var pets=await _context.Pets.Find(_=>true).ToListAsync();
            return Ok(pets);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> getPet(string id)
        {
            var pet= await _context.Pets.Find(p => p.Id==id).FirstOrDefaultAsync();
            if (pet == null)
            {
                return NotFound();
            }
            return Ok(pet);
        }
        [HttpPost]
        public async Task<IActionResult> createPet([FromBody] Pet pet)
            
        {

            pet.Id = null;
            if (pet.Name.Length > 25)
            {
                return BadRequest("A name cannot be longer than 25 characters! ");
            };
            if (pet.Age > 20)
            {
                return BadRequest("Age can be maximum 20! ");

            }

            await _context.Pets.InsertOneAsync(pet);
            return CreatedAtAction(nameof(getPet), new { id = pet.Id }, pet);
        }
        [HttpGet("sumOfAges")]
        public async Task<IActionResult> getSum()
        {
            var pets = await _context.Pets.Find(_ => true).ToListAsync();
            double total = pets.Sum(p => p.Age);
            return Ok(total);
        }

    }
}
