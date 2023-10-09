using System.ComponentModel.DataAnnotations;

namespace BoardGames.Domain.Enums;

public enum Role
{
    [Display(Name = "Admin")]
    Admin = 0,
    
    [Display(Name = "User")]
    User = 1,
}