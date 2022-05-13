const request = require("supertest");
const app = require("../app");

describe("Testes para as rotas de receita (/recipe)", () => {
  test("[GET /recipe] Lista todos as receitas", async () => {
      const res = await request(app)
        .get("/recipe")
        .set('Accept', 'application/json');

      expect(res.statusCode).toBe(200);
      expect(res.body).toBeInstanceOf(Array);

      const objToTest = res.body[0];

      expect(objToTest).toHaveProperty("id");
      expect(objToTest).toHaveProperty("name");
      expect(objToTest).toHaveProperty("image");
      expect(objToTest).toHaveProperty("body");

      expect(objToTest).toHaveProperty("createdBy");
      expect(objToTest).toHaveProperty(["createdBy", "id"]);
      expect(objToTest).toHaveProperty(["createdBy", "email"]);
      expect(objToTest).toHaveProperty(["createdBy", "username"]);
      expect(objToTest).toHaveProperty(["createdBy", "birth"]);
      expect(objToTest).toHaveProperty(["createdBy", "phone"]);
      expect(objToTest).toHaveProperty(["createdBy", "password"]);
      expect(objToTest).toHaveProperty(["createdBy", "createdAt"]);
      expect(objToTest).toHaveProperty(["createdBy", "updatedAt"]);
      expect(objToTest).toHaveProperty(["createdBy", "isAdmin"]);
      expect(objToTest).toHaveProperty(["createdBy", "isActive"]);
  });

  test("[GET /recipe/{recipe_id}] Lista uma receita a partir do id", async () => {
    const res = await request(app)
      .get("/recipe/1")
      .set('Accept', 'application/json');

    expect(res.statusCode).toBe(200);

    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("image");
    expect(res.body).toHaveProperty("body");

    expect(res.body).toHaveProperty("createdBy");
    expect(res.body).toHaveProperty(["createdBy", "id"]);
    expect(res.body).toHaveProperty(["createdBy", "email"]);
    expect(res.body).toHaveProperty(["createdBy", "username"]);
    expect(res.body).toHaveProperty(["createdBy", "birth"]);
    expect(res.body).toHaveProperty(["createdBy", "phone"]);
    expect(res.body).toHaveProperty(["createdBy", "password"]);
    expect(res.body).toHaveProperty(["createdBy", "createdAt"]);
    expect(res.body).toHaveProperty(["createdBy", "updatedAt"]);
    expect(res.body).toHaveProperty(["createdBy", "isAdmin"]);
    expect(res.body).toHaveProperty(["createdBy", "isActive"]);
  });

  test("[POST /recipe] Cria uma nova receita", async () => {
    const json = {
      name: "Suco de laranja",
      image: "laranja.png",
      body: "3 laranjas batidas",
      createdBy: {
        id: 1
      }
    }

    const res = await request(app)
      .post("/recipe")
      .send(json)
      .set("Content-Type", "application/json");

    expect(res.statusCode).toBe(201);                        

    json.id = 3;
    json.createdBy.id = 1;
    json.createdBy.email = "example@example.com";
    json.createdBy.username = "MyUsername";
    json.createdBy.birth = "2000-08-29T09:12:33.001Z";
    json.createdBy.phone = "(11)99999-9999";
    json.createdBy.password = "string hash";
    json.createdBy.createdAt = "2016-08-29T09:12:33.001Z";
    json.createdBy.updatedAt = "2016-08-29T09:12:33.001Z";
    json.createdBy.isAdmin = true;
    json.createdBy.isActive = true;

    expect(res.body).toEqual(json);
  });

  test("[DELETE /recipe/{id_recipe}] Remove uma receita pelo id", async () => {
    const res = await request(app)
      .delete("/recipe/1")
      .set('Accept', 'application/json');

    expect(res.statusCode).toBe(202); 
    expect(res.body).toEqual("Receita desativada com sucesso");
  });

  const agent = request.agent(app);

  test("Deleta receita e tenta retornar essa receita deletada (erro 404)", async () => {
    const resDelete = await agent
      .delete("/recipe/2")
      .set('Accept', 'application/json');

    expect(resDelete.statusCode).toBe(202); 
    expect(resDelete.body).toEqual("Receita desativada com sucesso");

    const resGet = await agent
      .get("/recipe/2")
      .set('Accept', 'application/json');

    expect(resGet.statusCode).toBe(404); 
    expect(resGet.body).toEqual("Error: Receita não encontrada");
  });
});
