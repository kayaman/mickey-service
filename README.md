# Mickey

A simple microservice application distributed via GitHub Container Registry and Helm. This application is part of [Disneyland](https://kayaman.github.io/disneyland/).

## Development

### Prerequisites

- Docker
- Node.js 18+
- Kubernetes cluster (for testing)
- Helm 3

### Local Development

1. Clone the repository:

```bash
git clone git@github.com:kayaman/mickey-service.git
cd mickey-service
```

2. Install dependencies:

```bash
cd service
npm install
```

3. Run locally:

```bash
npm run start
```

4. Build Docker image:

```bash
docker build -t kayaman/mickey-service .
docker run kayaman/mickey-service
```

### Deployment

#### Using Helm

1. Add the Helm repository:

```bash
helm repo add mickey-service https://kayaman.github.io/mickey-service
helm repo update
```

2. Install the chart:

```bash
helm install mickey-service mickey-service/mickey-service
```

## Configuration

See [values.yaml](helm/values.yaml) for configuration options.

## Usage Examples

### Basic Installation

```bash
# Add the Helm repository
helm repo add mickey-service https://kayaman.github.io/mickey-service
helm repo update

# Install with default configuration
helm install mickey-service mickey-service/mickey-service
```

## Manual Testing

```sh
kubectl logs <container_id>
```

## Implementation Notes

This simplified distribution strategy includes:

1. **Single Microservice**: A basic Express.js service that provides a simple REST API
2. **Basic Helm Chart**: Includes deployment, service, and common Kubernetes configurations
3. **GitHub Actions Workflows**:
   - Container image build and publication to GHCR
   - Helm chart packaging and release via GitHub Pages
4. **User-friendly Documentation**: Simple installation and configuration instructions

## License

This project is licensed under the MIT License..
