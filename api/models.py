from django.db import models

class Ciudad(models.Model):
    nombre = models.CharField(max_length=100)
    
    class Meta:
        db_table = 'ciudad'  # Nombre exacto de la tabla en la base de datos

    def __str__(self):
        return self.nombre

class Categoria(models.Model):
    nombre = models.CharField(max_length=100)
    
    class Meta:
        db_table = 'categoria'  # Nombre exacto de la tabla en la base de datos

    def __str__(self):
        return self.nombre

class Subcategoria(models.Model):
    nombre = models.CharField(max_length=100)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'subcategoria'  # Nombre exacto de la tabla en la base de datos

    def __str__(self):
        return f"{self.categoria.nombre} - {self.nombre}"

class Documento(models.Model):
    titulo = models.CharField(max_length=200)
    archivo = models.FileField(upload_to='documentos/')
    url = models.URLField(blank=True)
    subcategoria = models.ForeignKey(Subcategoria, on_delete=models.CASCADE)
    ciudad = models.ForeignKey(Ciudad, on_delete=models.CASCADE)
    
    class Meta:
        db_table = 'documento'  # Nombre exacto de la tabla en la base de datos

    def __str__(self):
        return self.titulo