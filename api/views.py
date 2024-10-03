from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_GET
from django.core.exceptions import ObjectDoesNotExist
from .models import Ciudad, Categoria, Subcategoria, Documento
import requests
from django.http import JsonResponse
import logging

def home(request):
    ciudades = Ciudad.objects.all()
    categorias = Categoria.objects.all()
    return render(request, 'api/home.html', {'ciudades': ciudades, 'categorias': categorias})

@require_GET
def get_subcategorias(request):
    categoria_id = request.GET.get('categoria_id')
    if not categoria_id:
        return JsonResponse({'error': 'Categoria ID is required'}, status=400)
    
    try:
        subcategorias = Subcategoria.objects.filter(categoria_id=categoria_id).values('id', 'nombre')
        return JsonResponse(list(subcategorias), safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

@require_GET
def get_documentos(request):
    ciudad_id = request.GET.get('ciudad_id')
    subcategoria_id = request.GET.get('subcategoria_id')
    
    if not ciudad_id or not subcategoria_id:
        return JsonResponse({'error': 'Both ciudad_id and subcategoria_id are required'}, status=400)
    
    try:
        documentos = Documento.objects.filter(
            ciudad_id=ciudad_id, 
            subcategoria_id=subcategoria_id
        ).values('id', 'titulo', 'archivo', 'url')
        return JsonResponse(list(documentos), safe=False)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

logger = logging.getLogger(__name__)

def get_colegios_data(request):
    try:
        logger.info("Iniciando solicitud a la API de Madrid")
        response = requests.get('https://datos.madrid.es/egob/catalogo/202311-0-colegios-publicos.json')
        response.raise_for_status()
        logger.info("Datos recibidos correctamente de la API de Madrid")
        return JsonResponse(response.json())
    except requests.RequestException as e:
        logger.error(f"Error al obtener datos de la API de Madrid: {str(e)}")
        return JsonResponse({'error': str(e)}, status=500)



# # Importación de viewsets de Django REST framework
# from rest_framework import viewsets

# # Importación de modelos de la aplicación
# from .models import Ciudad, Documento, Categoria, Subcategoria

# # Importación de serializadores de la aplicación
# from .serializers import CiudadSerializer, DocumentoSerializer, CategoriaSerializer, SubcategoriaSerializer

# # Importación de funciones útiles para vistas en Django
# from django.shortcuts import render, redirect, get_object_or_404

# # Definición de conjuntos de vistas para modelos específicos usando viewsets
# class CiudadViewSet(viewsets.ModelViewSet):
#     queryset = Ciudad.objects.all()
#     serializer_class = CiudadSerializer

# class DocumentoViewSet(viewsets.ModelViewSet):
#     queryset = Documento.objects.all()
#     serializer_class = DocumentoSerializer

# class CategoriaViewSet(viewsets.ModelViewSet):
#     queryset = Categoria.objects.all()
#     serializer_class = CategoriaSerializer

# class SubcategoriaViewSet(viewsets.ModelViewSet):
#     queryset = Subcategoria.objects.all()
#     serializer_class = SubcategoriaSerializer

# # Vista para la página principal, mostrando todos los registros de los modelos
# def home(request):
#     context = {
#         'ciudades': Ciudad.objects.all(),
#         'documentos': Documento.objects.all(),
#         'categorias': Categoria.objects.all(),
#         'subcategorias': Subcategoria.objects.all(),
#     }
#     return render(request, 'api/home.html', context)

# def filtered_view(request):
#     ciudad_id = request.GET.get('ciudad')
#     categoria_id = request.GET.get('categoria')
#     subcategoria_id = request.GET.get('subcategoria')

#     filtered_data = Documento.objects.all()

#     # Filtrando los datos basado en los parámetros proporcionados
#     filters = Q()
#     if ciudad_id:
#         filters &= Q(ciudad_id=ciudad_id)
#     if categoria_id:
#         filters &= Q(categoria_id=categoria_id)
#     if subcategoria_id:
#         filters &= Q(subcategoria_id=subcategoria_id)

#     filtered_data = filtered_data.filter(filters)

#     context = {
#         'filtered_data': filtered_data,
#         'ciudades': Ciudad.objects.all(),
#         'categorias': Categoria.objects.all(),
#         'subcategorias': Subcategoria.objects.all(),
#     }
    
#     return render(request, 'filtered_template.html', context)


# # Vista para crear una ciudad
# def create_ciudad(request):
#     if request.method == 'POST':
#         form = CiudadForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect('home')
#     else:
#         form = CiudadForm()

#     context = {'form': form}
#     return render(request, 'api/create_ciudad.html', context)

# # Vista para crear un documento
# def create_documento(request):
#     if request.method == 'POST':
#         form = DocumentoForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect('home')
#     else:
#         form = DocumentoForm()

#     context = {'form': form}
#     return render(request, 'api/create_documento.html', context)

# # Vista para crear una categoría
# def create_categoria(request):
#     if request.method == 'POST':
#         form = CategoriaForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect('home')
#     else:
#         form = CategoriaForm()

#     context = {'form': form}
#     return render(request, 'api/create_categoria.html', context)

# # Vista para crear una subcategoría
# def create_subcategoria(request):
#     if request.method == 'POST':
#         form = SubcategoriaForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect('home')
#     else:
#         form = SubcategoriaForm()

#     context = {'form': form}
#     return render(request, 'api/create_subcategoria.html', context)

# # Vista para eliminar una ciudad
# def delete_ciudad(request, ciudad_id):
#     ciudad = get_object_or_404(Ciudad, id=ciudad_id)
#     if request.method == 'POST':
#         ciudad.delete()
#         return redirect('home')
#     context = {
#         'object_type': 'ciudad',
#         'ciudad': ciudad
#     }
#     return render(request, 'api/delete_confirmation.html', context)

# # Vista para eliminar un documento
# def delete_documento(request, documento_id):
#     documento = get_object_or_404(Documento, id=documento_id)
#     if request.method == 'POST':
#         documento.delete()
#         return redirect('home')
#     context = {
#         'object_type': 'documento',
#         'documento': documento
#     }
#     return render(request, 'api/delete_confirmation.html', context)

# # Vista para eliminar una categoría
# def delete_categoria(request, categoria_id):
#     categoria = get_object_or_404(Categoria, id=categoria_id)
#     if request.method == 'POST':
#         categoria.delete()
#         return redirect('home')
#     context = {
#         'object_type': 'categoría',
#         'categoria': categoria
#     }
#     return render(request, 'api/delete_confirmation.html', context)

# # Vista para eliminar una subcategoría
# def delete_subcategoria(request, subcategoria_id):
#     subcategoria = get_object_or_404(Subcategoria, id=subcategoria_id)
#     if request.method == 'POST':
#         subcategoria.delete()
#         return redirect('home')
#     context = {
#         'object_type': 'subcategoría',
#         'subcategoria': subcategoria
#     }
#     return render(request, 'api/delete_confirmation.html', context)

# # Vista para editar una ciudad
# def edit_ciudad(request, ciudad_id):
#     ciudad = get_object_or_404(Ciudad, id=ciudad_id)
    
#     if request.method == 'POST':
#         form = CiudadForm(request.POST, instance=ciudad)
#         if form.is_valid():
#             form.save()
#             return redirect('home')
#     else:
#         form = CiudadForm(instance=ciudad)
    
#     context = {
#         'form': form,
#     }
#     return render(request, 'api/edit_ciudad.html', context)

# # Vista para editar un documento
# def edit_documento(request, documento_id):
#     documento = get_object_or_404(Documento, id=documento_id)
    
#     if request.method == 'POST':
#         form = DocumentoForm(request.POST, instance=documento)
#         if form.is_valid():
#             form.save()
#             return redirect('home')
#     else:
#         form = DocumentoForm(instance=documento)
    
#     context = {
#         'form': form,
#     }
#     return render(request, 'api/edit_documento.html', context)

# # Vista para editar una categoría
# def edit_categoria(request, categoria_id):
#     categoria = get_object_or_404(Categoria, id=categoria_id)
    
#     if request.method == 'POST':
#         form = CategoriaForm(request.POST, instance=categoria)
#         if form.is_valid():
#             form.save()
#             return redirect('home')
#     else:
#         form = CategoriaForm(instance=categoria)

#     context = {
#         'form': form,
#     }
#     return render(request, 'api/edit_categoria.html', context)

# # Vista para editar una subcategoría
# def edit_subcategoria(request, subcategoria_id):
#     subcategoria = get_object_or_404(Subcategoria, id=subcategoria_id)
    
#     if request.method == 'POST':
#         form = SubcategoriaForm(request.POST, instance=subcategoria)
#         if form.is_valid():
#             form.save()
#             return redirect('home')
#     else:
#         form = SubcategoriaForm(instance=subcategoria)

#     context = {
#         'form': form,
#     }
#     return render(request, 'api/edit_subcategoria.html', context)
