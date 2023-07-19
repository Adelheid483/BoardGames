using BoardGames.Constants;
using Microsoft.AspNetCore.Mvc;

namespace BoardGames.Controllers.Attributes;

public class ApiRouteAttribute : RouteAttribute
{
    public ApiRouteAttribute(string route) : base($"{Routes.Api}/{route}")
    {
    }
}