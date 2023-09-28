namespace BoardGames.Application.Utils;

public static class EnumerableExtensions
{
    public static bool IsNullOrEmpty<T>(this IEnumerable<T> enumerable)
    {
        return enumerable == null || !enumerable.Any();
    }
}