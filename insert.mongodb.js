const datadabase = 'BD3-NoSQL-AtlasMongoDB';
const collection = 'bd3-nosql-atv1';
use(datadabase)

db['bd3-nosql-atv1'].insertMany(
    [
        {
            "cod_aluno": 1,
            "cod_turma": 6,
            "nome":"Nathasha Gamna",
            "cpf":"000000000-1",
            "rg":"0000000-1",
            "telefone_aluno":"11914999804",
            "telefone_responsavel":"11907070707",
            "email":"nathasha.gama@etec.sp.gov.br",
            "data_nascimento":'2007-09-21',
        },
    {
        "cod_aluno": 2,
        "cod_turma": 6,
        "nome": "Lucas Oliveira",
        "cpf": "111111111-2",
        "rg": "1111111-2",
        "telefone_aluno": "11987654321",
        "telefone_responsavel": "11976543210",
        "email": "lucas.oliveira@etec.sp.gov.br",
        "data_nascimento": "2006-05-15"
    },
    {
        "cod_aluno": 3,
        "cod_turma": 6,
        "nome": "Mariana Santos",
        "cpf": "222222222-3",
        "rg": "2222222-3",
        "telefone_aluno": "11912345678",
        "telefone_responsavel": "11923456789",
        "email": "mariana.santos@etec.sp.gov.br",
        "data_nascimento": "2007-03-30"
    },
    {
        "cod_aluno": 4,
        "cod_turma": 6,
        "nome": "Gabriel Costa",
        "cpf": "333333333-4",
        "rg": "3333333-4",
        "telefone_aluno": "11955554444",
        "telefone_responsavel": "11944445555",
        "email": "gabriel.costa@etec.sp.gov.br",
        "data_nascimento": "2006-11-10"
    },
    {
        "cod_aluno": 5,
        "cod_turma": 6,
        "nome": "Isabela Ferreira",
        "cpf": "444444444-5",
        "rg": "4444444-5",
        "telefone_aluno": "11966667777",
        "telefone_responsavel": "11977776666",
        "email": "isabela.ferreira@etec.sp.gov.br",
        "data_nascimento": "2007-07-22"
    },
    {
        "cod_aluno": 6,
        "cod_turma": 6,
        "nome": "Rafael Martins",
        "cpf": "555555555-6",
        "rg": "5555555-6",
        "telefone_aluno": "11988889999",
        "telefone_responsavel": "11999998888",
        "email": "rafael.martins@etec.sp.gov.br",
        "data_nascimento": "2006-04-18"
    },
    {
        "cod_aluno": 7,
        "cod_turma": 6,
        "nome": "Carolina Ribeiro",
        "cpf": "666666666-7",
        "rg": "6666666-7",
        "telefone_aluno": "11933332222",
        "telefone_responsavel": "11922223333",
        "email": "carolina.ribeiro@etec.sp.gov.br",
        "data_nascimento": "2007-01-25"
    },
    {
        "cod_aluno": 8,
        "cod_turma": 6,
        "nome": "Thiago Almeida",
        "cpf": "777777777-8",
        "rg": "7777777-8",
        "telefone_aluno": "11911112222",
        "telefone_responsavel": "11922221111",
        "email": "thiago.almeida@etec.sp.gov.br",
        "data_nascimento": "2006-08-12"
    },
    {
        "cod_aluno": 9,
        "cod_turma": 6,
        "nome": "Juliana Lima",
        "cpf": "888888888-9",
        "rg": "8888888-9",
        "telefone_aluno": "11944443333",
        "telefone_responsavel": "11933334444",
        "email": "juliana.lima@etec.sp.gov.br",
        "data_nascimento": "2007-12-05"
    },
    {
        "cod_aluno": 10,
        "cod_turma": 5,
        "nome":"Silvana Tales",
        "cpf":"999999999-9",
        "rg":"9999999-9",
        "telefone_aluno":"11914999999",
        "telefone_responsavel":"11908080807",
        "email":"Silvana.tales@etec.sp.gov.br",
        "data_nascimento":'2007-07-07',
    }
    ]
)