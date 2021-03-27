using Microsoft.EntityFrameworkCore.Migrations;

namespace Gerenciamento_de_Horas.Migrations
{
    public partial class N : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "TotalHoras",
                table: "Lancamentos",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalHoras",
                table: "Lancamentos");
        }
    }
}
