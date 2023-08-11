using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BoardGames.Migrations
{
    public partial class Update_tyrantsoftheunderdarkmatch_changeplayer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PlayerName",
                table: "TyrantsOfTheUnderdarkMatches");

            migrationBuilder.AddColumn<Guid>(
                name: "PlayerId",
                table: "TyrantsOfTheUnderdarkMatches",
                type: "uniqueidentifier",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PlayerId",
                table: "TyrantsOfTheUnderdarkMatches");

            migrationBuilder.AddColumn<string>(
                name: "PlayerName",
                table: "TyrantsOfTheUnderdarkMatches",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
