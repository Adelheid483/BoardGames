using BoardGames.Domain.Enums;

namespace BoardGames.Domain.Entities;

public class User : Entity
{
    public string Name { get; set; }
    
    public string Password { get; set; }
    
    public Role Role { get; set; }
    
    public DateTime CreatedAt { get; set; }
    
    public DateTime? UpdatedAt { get; set; }

    public DateTime? PasswordChangedAt { get; set; }
}