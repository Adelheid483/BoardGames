using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BoardGames.Migrations
{
    public partial class Update_matches_addnumber : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MatchNumber",
                table: "TyrantsOfTheUnderdarkMatches",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MatchNumber",
                table: "ClankMatch",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MatchNumber",
                table: "TyrantsOfTheUnderdarkMatches");

            migrationBuilder.DropColumn(
                name: "MatchNumber",
                table: "ClankMatch");
        }
    }
}
