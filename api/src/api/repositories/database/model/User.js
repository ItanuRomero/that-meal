class User {
  constructor(userDados) {
    this.id = userDados.id,
    this.email = userDados.email,
    this.username = userDados.username,
    this.birth = userDados.birth,
    this.phone = userDados.phone,
    this.password = userDados.password,
    this.createdAt = userDados.createdAt,
    this.updatedAt = userDados.updatedAt,
    this.isAdmin = userDados.isAdmin,
    this.isActive = userDados.isActive
  }
}

module.exports = User;