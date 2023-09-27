using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BoardGames.Migrations
{
    public partial class Update_matches : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "GameId",
                table: "TyrantsOfTheUnderdarkMatches",
                newName: "MatchId");

            migrationBuilder.RenameColumn(
                name: "GameId",
                table: "ClankMatch",
                newName: "MatchId");

            migrationBuilder.AddColumn<int>(
                name: "TotalCount",
                table: "ClankMatch",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalCount",
                table: "ClankMatch");

            migrationBuilder.RenameColumn(
                name: "MatchId",
                table: "TyrantsOfTheUnderdarkMatches",
                newName: "GameId");

            migrationBuilder.RenameColumn(
                name: "MatchId",
                table: "ClankMatch",
                newName: "GameId");
        }
    }
}
